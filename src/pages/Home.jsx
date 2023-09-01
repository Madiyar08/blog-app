import '../home.css'
function Home() {
    return (
        <div className="main">
        <div className="sidebar items-center">
          <div className="sidebar-top">
            <div className="userLogo">
              <p>M</p>
            </div>
            <div className="search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 icons text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <p>search</p>
            </div>
            <div className="trending">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 icons"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                />
              </svg>
              <p>trending</p>
            </div>
          </div>
          <div className="sidebar-bottom">
            <div className="create">
              <svg
                style={{ color: '#6EEB83', height: '40px', width: '40px' }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 icons"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>create</p>
            </div>
          </div>
        </div>
        <div className="sidebar-responsive">
          <div className="userLogo">
            <p>M</p>
          </div>
          <div className="search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 icons"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
          <div className="trending">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 icons"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
              />
            </svg>
          </div>
          <div className="create">
            <svg
              style={{ color: '#6EEB83', height: '40px', width: '40px' }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 icons"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
        <div className="posts space-y-10">
          <h1>Latest</h1>
          <div className="post">
            <div className="created-date">
              <p className="day">27</p>
              <p className="month">May</p>
              <p className="userName">@samurai2099</p>
            </div>
            <div className="post-texts">
              <a href="#" className="post-title">
                15 Disadvantages Of Freedom And How You Can Workaround It.
              </a>
              <p className="post-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum
                <a href="#" className="readMore">
                  ...read more
                </a>
              </p>
              <div className="hash-tags">
                <p className="hash-tag">#meditation</p>
                <p className="hash-tag">#mentalpeace</p>
              </div>
              <div className="create-date_responsive">
                <div className="date">
                  <p>22.05.2023</p>
                </div>
                <div className="userName-res">
                  <p>@samurai2099</p>
                </div>
              </div>
            </div>
          </div>

          <div className="post">
            <div className="created-date">
              <p className="day">24</p>
              <p className="month">May</p>
              <p className="userName">@capitalism</p>
            </div>
            <div className="post-texts">
              <a href="#" className="post-title">
              The Death Of Freedom.
              </a>
              <p className="post-text">
              Diam quis enim lobortis scelerisque fermentum dui. Fames ac turpis egestas maecenas pharetra convallis posuere morbi. Amet risus nullam eget felis. Neque laoreet suspendisse interdum consectetur libero id. Fringilla urna porttitor rhoncus dolor. Pulvinar sapien et ligula ullamcorper malesuada proin. Massa eget egestas purus viverra accumsan in nisl. Quam adipiscing vitae proin sagittis nisl.
                <a href="#" className="readMore">
                  ...read more
                </a>
              </p>
              <div className="hash-tags">
                <p className="hash-tag">#anarchy</p>
                <p className="hash-tag">#silence</p>
              </div>
              <div className="create-date_responsive">
                <div className="date">
                  <p>24.05.2023</p>
                </div>
                <div className="userName-res">
                  <p>@capitalism</p>
                </div>
              </div>
            </div>
          </div>

          <div className="post">
            <div className="created-date">
              <p className="day">27</p>
              <p className="month">May</p>
              <p className="userName">@samurai2099</p>
            </div>
            <div className="post-texts">
              <a href="#" className="post-title">
                15 Disadvantages Of Freedom And How You Can Workaround It.
              </a>
              <p className="post-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum
                <a href="#" className="readMore">
                  ...read more
                </a>
              </p>
              <div className="hash-tags">
                <p className="hash-tag">#meditation</p>
                <p className="hash-tag">#mentalpeace</p>
              </div>
              <div className="create-date_responsive">
                <div className="date">
                  <p>22.05.2023</p>
                </div>
                <div className="userName-res">
                  <p>@samurai2099</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
       );
}

export default Home;