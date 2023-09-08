export function Alerts({ message }) {
  if (message == "success") {
    return (
      <>
        <div className="alert alert-success">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Correct Answer!</span>
          <picture>
            <source
              srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1f389/512.webp"
              type="image/webp"
            />
            <img
              src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f389/512.gif"
              alt="🎉"
              width="32"
              height="32"
            />
          </picture>
        </div>
      </>
    );
  } else if (message == "tryagain") {
    return (
      <>
        <div className="alert alert-warning">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <span>Try Again!</span>
          <picture>
            <source
              srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/203c_fe0f/512.webp"
              type="image/webp"
            />
            <img
              src="https://fonts.gstatic.com/s/e/notoemoji/latest/203c_fe0f/512.gif"
              alt="‼"
              width="32"
              height="32"
            />
          </picture>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="alert alert-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Wrong Answer!</span>
          <picture>
            <source
              srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/274c/512.webp"
              type="image/webp"
            />
            <img
              src="https://fonts.gstatic.com/s/e/notoemoji/latest/274c/512.gif"
              alt="❌"
              width="32"
              height="32"
            />
          </picture>
        </div>
      </>
    );
  }
}
