/*
Scenario before Npm ,
to install or include any library for our app functionalities we use to include library using script tag
ie
<script src="link of library mentioned in modules(CDN)"></script>

but why we need npm if we doing this,well it created problem in our big projects where including lot of libraries using script tag may
 creates index.html looks filthy and doesnot sound good right,or saying messy is right word,and yes if new updates comes or new version there
 then we have to manually update that src attribute that makes it more harder to use,and no single file or repository that contains all the files at
 just one place.
 so that where npm invention comes into picture

// STEPS

1ST check you npm installed or not in your pc
 open terminal use cmd is [npm -v]
 if got a number means u do have installed
 if showing error then install nodejs from website and then again apply same cmd to check

2nd Step is to now init npm using cmd [npm init]
  it will ask some question fill it and press yes
  it will install a package.json file in your file or say project
  hurray u got what u want



  lets use npm and install a leaflet library
  cmd is [npm install leaflet]
  now check package.json u will see a new field or to say library names leaflet means u installed it correctly 
  and also downloaded a file called node_module which has all functionalities u going to use
 
 
 
  */

