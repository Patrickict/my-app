import OurPlants from '../images/ourplants.png';
import DesignPlants from '../images/design.png';
 import Open from '../images/whereareopen.png';

const Home = () => {
    return (
        <main>
        <section class="mainsection">
            <article class="mainarticle">
                <h1>Everything is free This Weekend</h1>
                <p>Lacus volutpat aliquet rhoncus ultricies eleifend tortor pellentesque. Cursus erat porta senectus nunc vestibulum scelerisque. Felis dolor potenti magnis magnis nunc? Sagittis nec vestibulum inceptos, pulvinar libero pretium. Gravida habitasse orci magna; vitae consectetur magna felis elementum. Conubia torquent efficitur cursus tortor imperdiet amet. Aenean quisque facilisi ridiculus imperdiet congue, quis pulvinar. Lectus primis primis per condimentum ornare facilisi. Fringilla neque conubia ultrices proin dis lacus.</p>
            </article>
        </section>
        <section class="subsection">
            <article class="subarticle">
                <h2>Shop</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <img src={OurPlants} alt="Our plants" class="articleimage" name="ourplants" id="ourplants"/>
                <form action="shop.html">
                    <input type="submit" value="Go to shop" class="btn btn-primary" />
                </form>
            </article>
            <article class="subarticle">
                <h2>Design your garden</h2>
                <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Vestibulum maecenas dolor fringilla sollicitudin vestibulum, quis ante arcu. Curae primis himenaeos, sem interdum velit rhoncus posuere suspendisse? Leo ullamcorper imperdiet facilisis elit malesuada magna. Rutrum consectetur congue congue maecenas eros himenaeos nisl. Convallis eleifend justo tincidunt at rutrum congue finibus morbi. Dis facilisis urna nisi eu placerat convallis rhoncus.</p>
                <img src={DesignPlants} alt="Logo" class="articleimage"/>
                <form action="design.html">
                    <input type="submit" value="Design your garden" class="btn btn-primary"/>
                </form>
            </article>
            <article class="subarticle">
                <h2>Opening hours</h2>
                <p>Blandit efficitur id dapibus magnis adipiscing phasellus porta tincidunt tempor. Consequat habitant aenean non dui nunc consequat eget semper. Vestibulum semper lectus dolor convallis dui proin. Curabitur ut fames ut nibh lacinia rhoncus dis sollicitudin. Eget mattis molestie fusce faucibus integer justo lacinia vivamus risus. Dapibus fames finibus sem dictum at magnis. Fusce ligula vel posuere finibus imperdiet. Ut habitant imperdiet nam purus cursus sodales.</p>
                <img src={Open} alt="Logo" class="articleimage"/>
            </article>
        </section>
        </main>
    );
  }

  export default Home;