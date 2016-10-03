# [twentyfivetolife](http://www.twentyfivetolife.ca/ "twentyfivetolife")

This project was developed to help the classes of BUS 361 at SFU manage their respective charity events and to help increase awareness of the project.

## Installation
This project relies on the following technologies and several other dependencies:
* [Node](https://nodejs.org/en/ "Node")
* [Jekyll](https://jekyllrb.com/ "Jekyll CMS")
* [Grunt](http://gruntjs.com/ "Grunt")

To get the project up and running the above technologies and their respective dependencies must be installed.

## Adding Events
To add events to the website, add markdown files to the **_posts** directory. The filename needs to be as follows:
*Year-month-day-filename.md*. For example: **2016-09-10-test.md**.

### Post Syntax
Files should follow this syntax in order to be processed by Jekyll. All relevant info is in the YAML front matter. I recommend using the medium images for the carousel but you can make whatever changes you see fit. The example below shows that you can add whatever html you see fit in the description; I used an a tag to link to a facebook event -- this is probably something you'll want to do.

**Please note:** If the event is upcoming or completed, this must be noted in the categories variable so jekyll can apply the appropraite styling.

---

    ---
    title:  "Hipsters for the cure"

    event_date: "October 1, 2016"

    thumbnail: "/images/1000-medium.jpg"

    subtitle: "Test&nbsp;Event&nbsp;subtitle"

    categories: upcoming

    images:
    - url: /images/800-medium.jpg
       alt: Alt text
    - url: /images/1000-medium.jpg
      alt: Alt text
    - url: /images/1200-medium.jpg
      alt: Alt text

    description: Climb 35 flights of stairs at <a href="http://harbourcentre.com/">Vancouver's Harbour Center</a> in support of the Canadian Cancer Society. 100% of proceeds from the event will go directly to cancer research. Participants will first enjoy a warm up sponsored by Steve Nash Fitness, ending with an epic photo opportunity at the top of the Vancouver Lookout!

    details:
    - where: test test test test test test test test test test test test test test
      when: Some day
      join: Join us!
      donate: Donate now
      entrance: By donation
    ---
---

# Images
All general purpose images should be added to the originals directory. **Sponsor Logos** must be added to the **sponsor_logos** directory

# History And Sponsors
### These files are stored in the **_data** directory.
## History
Make the necessary adjustments to the content in the history.yml file. Here is the syntax for each history entry.
I recommend using an image from the images director (maybe 800x800 for the thumbnail).

    - year: 2013

      title: "An Amazing Success: 2013"

      description: "In 2014, SFU students reached their goal of raising $27,500 for the Canadian Cancer Society! They only had until December 1st to reach this target. Students from various different backgrounds and different upbringings joined together to fight against cancer. Eight different events were hosted throughout the year. You can find a listing of the past events below."

      thumbnail: http://placekitten.com/g/600/600

## sponsors.yml
Sponsor thumbnails will always be in the sponsor_thumbnails directory. Follow the below syntax.
      - name: Microsoft

      url: /images/sponsor_thumbnails/Microsoft-Logo-HD.png

      website: https://www.microsoft.com/en-ca/

# Updating the graphs
In the **js** directory, make changes to the app.js file.
### Update Money Raised graph
To updated this graph, make a change to the varialble **moneyRaised** (should be on line 7).

### Update Number Of Events graph

To update this graph, make a change to the **value** portion of this javascript function

---
    $('.number-of-events-graph').circleProgress({
        value: (0),
        size: size,
        fill: {
            color: fill
        },
        animation: {
            duration: 1500
        },
        thickness: (thicknessRatio * size)
    }).on('circle-animation-progress', function(event, progress, value) {
        $(this).find('strong').html(value + '/' + 9);
    });
---

## Update Days Left
This should auto update,, but if my dates are wrong, simply change the dates in the varialbes at the beginning of the jvascript file.

    firstDate = new Date("September 16, 2016"),
    endDate = new Date("Decemeber 25, 2016"),


# Create The Website
After you've done what you need to do, simply execute the build script that I wrote. **./build.sh** and this will generate the site files.
