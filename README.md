# First-Timer
##INTRODUCTION
Welcome to First Timer! I assume you want to
get up and running real quick, so below you
will find the installation instructions and
important notes so you can get First Timer
up and running in a jiffy.

##INSTRUCTIONS
  1)	Copy all of the files in the folder PACKAGE into
      your root folder for your website. This is
      important so all you have to do is direct the
      html (and JS if your code goes that route) to
      the package folder, and you can simply leave
      the rest of the Links & Src links as is.
  2)	Copy the CSS refrences, and Javscript Refrences
      into your index.html file (assuming this is the
      on the default page on your website - but if it
      isn't, no change is needed).
  3)	Copy the First-Timer Popup Code. This is outlined
      with very wide comment marks below - shouldn't be
      that hard to miss.
  4) 	Copy the First-Timer Trigger Code. This again is
      outlined with very wide comment marks, below the
      Popup Code.
  5)	Customize! You can now customize First-Timer to
      your needs, and implement accordingly.

##IMPORTANT NOTES
    _TABS_
    * If you have more than 5 Tabs with small title text,
      I would highly reccomend using just the TABID's
      instead of a TABID + Title.

    _PAGINATION_
    * When you add the pagination triggers at the bottom,
      you need to make sure what css class is attached
      to each - to be sure that they trigger the next
      page. Below is a simple grid to help organize which
      classes are needed for which types of pagination
      buttons.

        TYPE				CLASS													NOTES
        Next				md-btn, btnNext								none
        Previous		md-btn, btnPrevious						none
        Last				md-close, md-btn, btnFirst		If you do not add the md-close class,
                                                  the popup modal will not dismiss! It is
                                                  imperative that you add the btnFirst class
                                                  as this resets the modal, so if the user
                                                  wants to reopen it at a later time through
                                                  your app/website's settings, they can.

    _OVERLAY_
    *	The small div that contains the MD-OVERLAY class
      controls the dimmed background. You can edit what
      color, or what opacity it is in the directory:
        package/css/custom.css

    _IMAGES_
    *	If you want to change the background of the pages,
      you can change the images located in the directory:
        package/img/

      You can replace the images in this folder, reduce, or
      add more - but I highly reccomend on keeping them in
      this folder for organization. The linkage to the images
      are in a ' style="background-image" 'line in the page's
      top-most div.
      If you want just a color background, you can edit the
      class TAB-PANE in the custom.css file located in the
      directory:
        package/css/custom.css

    _REMOTE TRIGGERING_
    *	If you want to remotely trigger First Timer, you can run
      the following line in the JS Console for the website:
        '''Cookies.set('firsttimeview', '0')'''

      You can also reset your browser's cookies to re-trigger it,
      or if you have a cookies editor, just set the cookie
      "firsttimeview" to 0.

    _COOKIES_
    *	First timer DOES USE COOKIES. If your website serves the UK
      please read this website on regards to the usage of Cookies.
        https://goo.gl/lpqF4f

    Z-INDEX_
    *	All of First-Timer is built on the level of 2000 in regards to
      the Z-Index. If you want to put content above First Timer, put it
      above 2010 - as some content for the Stepper utilize the 10 levels
      in between.
