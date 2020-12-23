const Home = () => {
  return (
    <div className={"section"}>
      <div className={"content"}>
        <div>
          <p className={"blurb"}>
            Hello! Thanks for visiting my site!
            <br />
            <br />
            My name is Matt Brannon. I'm a musician, artist, and web developer.
          </p>

          <p className={"blurb"}>
            I don't get a lot of traffic so if you're here, there is a good
            chance it's because I recently applied for a job at your company. I
            encourage you to take a few minutes and look around the site. I have
            tried my best to inject as much of my personality into this site as
            technology will allow. This site is me. If you like the site, you'll
            probably like me. Let's just hope the feeling is mutual. :)
            <br />
            <br />
            This site is a work in progress. It has gone through a few
            iterations so far. This current version is complete rewrite of any
            previous versions. The reason is twofold.
          </p>
          <ol>
            <li>
              <p>
                I have started to truly embrace the concept of mobile first
                development. And since I didn't have a mobile version of the
                site, it seemed like a good idea to do a rewrite with `mobile
                first` concepts in mind.
              </p>
            </li>
            <li>
              <p>
                The previous iteration was written well over a year ago. And
                frankly... That guy sucked. 😂 🤣 If you're a programmer you
                know what I mean. Looking back on old code is like reading an
                old love letter you wrote in middle school. Maybe a few parts
                are cute and make you smile. Maybe some of the naivety is
                endearing. But for the most part, the whole thing just makes you
                cringe.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Home;
