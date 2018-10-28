import React from 'react';

export default class Main extends React.Component {
  constructor() {
    super();

    this.state = { title: '', intro: '' };
  }

  render() {
    return (
      <div className="container">
        <main>
          <div className="intro">
            <p>
              We are an
              <a
                href="http://en.wikipedia.org/wiki/Open-source_software"
                target="_blank"
              >
                {' '}
                {' '}
                {' '}
                open
                    source

              </a>
              {' '}
community started to help people find all the algorithms and data structures at a single place.
            </p>
          </div>
          <p>Explore Algorithms Implementation in following Programming Languages</p>
          <ul>
            <li>
              <a target="_blank" href="https://github.com/TheAlgorithms/C">
                C

              </a>

            </li>
            <li>
              <a
                target="_blank"
                href="https://github.com/TheAlgorithms/C-Plus-Plus"
              >
                {' '}
                C++

              </a>

            </li>
            <li>
              <a
                target="_blank"
                href="https://github.com/TheAlgorithms/Python"
              >
                {' '}
                Python

              </a>

            </li>
            <li>
              <a target="_blank" href="https://github.com/TheAlgorithms/Java">
                Java

              </a>

            </li>
            <li>
              <a
                target="_blank"
                href="https://github.com/TheAlgorithms/Scala"
              >
                {' '}
                Scala

              </a>

            </li>
            <li>
              <a
                target="_blank"
                href="https://github.com/TheAlgorithms/C-Sharp"
              >
                {' '}
                C #

              </a>

            </li>
            <li>
              <a target="_blank" href="https://github.com/TheAlgorithms/Rust">
                Rust

              </a>

            </li>
            <li>
              <a
                target="_blank"
                href="https://github.com/TheAlgorithms/Javascript"
              >
                {' '}
                JavaScript

              </a>

            </li>
            <li>
              <a target="_blank" href="https://github.com/TheAlgorithms/Go">
                Go

              </a>

            </li>
            <li>
              <a target="_blank" href="https://github.com/TheAlgorithms/R">
                R

              </a>

            </li>
            <li>
              <a target="_blank" href="https://github.com/TheAlgorithms/Ruby">
                Ruby

              </a>

            </li>
            <li>
              <a
                target="_blank"
                href="https://github.com/TheAlgorithms/MATLAB-Octave"
              >
                MATLAB /
                            Octave

              </a>

            </li>

          </ul>
        </main>
        <footer>
          <ul className="meta inline-list">
            <li>
              <a href="http://www.github.com/TheAlgorithms" target="_blank">
                github /
            TheAlgorithms

              </a>

            </li>

          </ul>
        </footer>
      </div>
    );
  }
}
