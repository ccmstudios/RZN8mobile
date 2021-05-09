import React from "react";
import ReactPlayer from "react-player";
import GoogleLogin from "react-google-login";

const Home =() => {
    const login = (response) => {
      console.log(response);
    };
    return (
      <div>
        <h1>This is Home</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a
          eleifend velit, eget finibus massa. Integer dictum, lacus eget
          tincidunt facilisis, urna risus efficitur dolor, sit amet convallis
          nunc sem at turpis. Nunc est ante, congue in odio vel, blandit
          volutpat ex. Mauris nulla quam, imperdiet eget eros eu, mattis egestas
          neque. Fusce nec ullamcorper dolor. Donec diam massa, congue ac lacus
          a, sodales tincidunt elit. Suspendisse ut eros lectus. Pellentesque
          dapibus ac sem vestibulum porta. Aenean rhoncus purus interdum diam
          tincidunt, non pellentesque massa pulvinar. Donec sit amet ipsum eu
          lorem hendrerit venenatis. Ut mi elit, aliquam et velit in, imperdiet
          bibendum leo. Fusce scelerisque mauris lectus, convallis eleifend
          tellus mattis non. Ut lacinia arcu ut nibh feugiat, sit amet feugiat
          neque cursus. Cras malesuada massa ut dictum hendrerit.
        </p>
        <GoogleLogin
          clientId="887759217582-03uaa928fh3mdn3c17brugda4j70pdq8.apps.googleusercontent.com"
          render={(renderProps) => (
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              className="loginBtn"
            >
              Login With Google
            </button>
          )}
          onSuccess={login}
          onFailure={login}
          isSignedIn={true}
          cookiePolicy={"single_host_origin"}
        />
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url="https://youtu.be/ak9ok5H-pOY"
            width="648px"
            height="648px"
            playing="true"
          />
        </div>
      </div>
    );
  }

export default Home;
