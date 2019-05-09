import React from "react";

const CodeSnippet = () => {
  return (
    <>
      <h3>Function Instantiation</h3>
      <code>
        <pre>
          <p className="snippet">
            {`
function createPlayer(name, score){
  var player = {};
  player.name = name;
  player.score = score;
  player.increment = function() {
    this.score++;
  };
}

`}
          </p>
        </pre>
      </code>
    </>
  );
};

export default CodeSnippet;
