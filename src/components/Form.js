import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div className="hero-form">
        <form>
          <label className="label-hero">Project name</label>
          <input className="input-hero" type="text" id="projectname" />
        </form>
        <form>
          <label className="label-hero">URL</label>
          <input className="input-hero" type="text" id="url" />
        </form>
        <form>
          <label className="label-hero">Designer’s name or team</label>
          <input className="input-hero" type="text" id="team" />
        </form>
        <div className="buttons">
          <button className="button-generic button-main button-left">
            <svg
              className="button-icon"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.6666 5.33333H3.33331C2.22665 5.33333 1.33331 6.22667 1.33331 7.33333V11.3333H3.99998V14H12V11.3333H14.6666V7.33333C14.6666 6.22667 13.7733 5.33333 12.6666 5.33333ZM10.6666 12.6667H5.33331V9.33333H10.6666V12.6667ZM12.6666 8C12.3 8 12 7.7 12 7.33333C12 6.96667 12.3 6.66667 12.6666 6.66667C13.0333 6.66667 13.3333 6.96667 13.3333 7.33333C13.3333 7.7 13.0333 8 12.6666 8ZM12 2H3.99998V4.66667H12V2Z"
                fill="white"
              />
            </svg>{" "}
            Print report
          </button>
          <button className="button-generic button-secondary button-right">
            <svg
              className="button-icon"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.00002 3.99999V5.99999L10.6667 3.33332L8.00002 0.666656V2.66666C5.05335 2.66666 2.66669 5.05332 2.66669 7.99999C2.66669 9.04666 2.97335 10.02 3.49335 10.84L4.46669 9.86666C4.16669 9.31332 4.00002 8.67332 4.00002 7.99999C4.00002 5.79332 5.79335 3.99999 8.00002 3.99999ZM12.5067 5.15999L11.5334 6.13332C11.8267 6.69332 12 7.32666 12 7.99999C12 10.2067 10.2067 12 8.00002 12V9.99999L5.33335 12.6667L8.00002 15.3333V13.3333C10.9467 13.3333 13.3334 10.9467 13.3334 7.99999C13.3334 6.95332 13.0267 5.97999 12.5067 5.15999Z"
                fill="#EB5757"
              />
            </svg>
            Reset checklist
          </button>
        </div>
      </div>
    );
  }
}

export default Form;
