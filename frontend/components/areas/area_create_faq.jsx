import React from 'react';

export default () => {
  // <h2>Thanks for sharing your first area!</h2>
  //   <h2>Here are some FAQ's to help get you started.</h2>
  return (
  <section className="area-create-faqs-page">
    <h2>Adding New Areas & Routes</h2>
    
    <h3>How are areas and route organized?</h3>
    <p>Areas are arranged in a hierarchy from states (and countries) down to small crags and individual boulders. States can have any number and levels of sub-areas. Complicated areas will have more sub-areas than straightforward ones. Sub-areas can contain either more sub-areas OR routes, but not both.</p>
    
    <h3>Do I need to have climbed a route before adding it?</h3>
    <p>Usually you should have climbed a route before adding it. You will be able to describe it much better and more accurately after climbing it. There might rarely be times where you can accurately enter a route without climbing it (e.g., a sport route right next to one you climbed with nearly identical features and you were able to watch someone else and learn some beta from them).</p>
    
    <h3>Should I enter projects or potential routes?</h3>
    <p>No, please only enter complete routes that you've climbed and can accurately describe.</p>
    
    <h3>Should I enter all the areas and routes in my guidebook to 'build out' a crag ?</h3>
    <p>No.While certain factual data is not copyrighted, if you haven't actually climbed the routes, you will not be able to describe them accurately. Leave them for someone else to enter.</p>
    
    <h3>How do I add an area ?</h3>
    <p>First, find the parent area that contains this area.From that page, click 'Add To Page' on the top - right of the page and add your new area.Note you may need to first create intermediate sub - areas if they don't exist yet. For example, if you have a small new crag in Colorado, and it doesn't belong in any existing sub - area of Colorado, you may first need to create a region that contains your new crag and other nearby new crags.</p>
    
    <h3>How do I add a route ?</h3>
    <p>First, make sure the appropriate sub - area exists for this route - usually a named crag.You may need to create the sub - area first.From the area page, click 'Add to Page' on the top right and add your route.</p>
    
    <h3>What should I know about copyrighted material ?</h3>
    <p>Do not copy text or photos directly from another website, guidebook, or other publication.We want to respect copyrighted material, and we would rather hear about the experience in your own words anyway! If you know the original author or photographer, and they have given you permission to use the text or photos on Mountain Project, please have them send us an email at content@adventureprojects.net explicitly stating that they have granted you permission to use their material.</p>
  </section>
)};
