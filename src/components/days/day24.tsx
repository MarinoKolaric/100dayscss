import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import '../../style/days/day24.scss';
import { theme } from '@style';
import { Box } from '@components';

const Container = styled.div`
  align-items: center;
  background-color: ${theme.color.day24Background};
  display: flex;
  height: 400px;
  position: relative;
  width: 100%;
`;

export const Day24 = () => {
  const slide = useCallback(() => {
    let isClicked: number;
    const OverlayEl = document.getElementById('overlay24') as HTMLElement;
    const SliderEl = document.getElementById('slider') as HTMLElement;

    if (!SliderEl || !OverlayEl) return;

    compareSides(OverlayEl);

    function compareSides(overlayEl: HTMLElement) {
      let w = overlayEl.offsetWidth;
      // overlayEl.style.width = w / 2 + 'px';
      overlayEl.style.width = w / 2 + 'px';

      SliderEl.addEventListener('mousedown', slideReady);
      SliderEl.addEventListener('touchstart', slideReady);
      window.addEventListener('mouseup', slideFinish);
      SliderEl.addEventListener('touchend', slideFinish);

      function slideReady(e: MouseEvent | TouchEvent): void {
        e.preventDefault();
        isClicked = 1;

        window.addEventListener('mousemove', slideMove);
        window.addEventListener('touchmove', slideMove);
      }

      function slideFinish(e: MouseEvent | TouchEvent): void {
        isClicked = 0;
      }

      function slideMove(e: MouseEvent | TouchEvent): void {
        if (!isClicked) return;
        let pos = getCursorPos(e);
        if (pos < 0) pos = 0;
        if (pos > w) pos = w;

        slide(pos);
      }

      function getCursorPos(e: MouseEvent | TouchEvent): number {
        let x = 0;
        let a = overlayEl.getBoundingClientRect();

        if (e instanceof TouchEvent) {
          x = e.changedTouches[0].pageX - a.left;
        }
        if (e instanceof MouseEvent) {
          x = e.pageX - a.left;
        }

        x = x - window.pageXOffset;

        return x;
      }

      function slide(x: number): void {
        overlayEl.style.width = x + 'px';

        if (overlayEl.offsetWidth < SliderEl.offsetWidth) {
          SliderEl.style.left = SliderEl.offsetWidth / 2 + 'px';
        } else {
          SliderEl.style.left =
            overlayEl.offsetWidth - SliderEl.offsetWidth / 2 + 'px';
        }
      }
    }
  }, []);

  useEffect(() => {
    slide();
  }, [slide]);
  return (
    <Box title="Day 24" link="day24" componentName="Day24">
      <Container className="day24">
        <div className="wrapper">
          <div className="car car-first">
            <div className="new">
              <div className="new-bot">
                <div className="air-intake">
                  <div className="grid"></div>
                </div>
                <div className="fog-light"></div>
                <div className="plate">
                  <div className="brand"></div>
                </div>
              </div>
              <div className="mid">
                <div className="new-mid left"></div>
                <div className="new-mid right"></div>
              </div>
              <div className="top-new">
                <div className="new-top left">
                  <div className="hood"></div>
                  <div className="mirror"></div>
                </div>
                <div className="new-top right">
                  <div className="hood"></div>
                  <div className="mirror r"></div>
                </div>
                <div className="interior">
                  <div className="back-mirror"></div>
                  <div className="back-window">
                    <div className="seat"></div>
                    <div className="seat"></div>
                  </div>
                </div>
                <div className="motor-lines"></div>
                <div className="headlights">
                  <div className="lamp">
                    <div className="lamp-glass"></div>
                  </div>
                  <div className="lamp">
                    <div className="lamp-glass"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ground"></div>
          </div>
        </div>
        <div className="slider" id="slider"></div>
        <div className="wrapper overlay24" id="overlay24">
          <div className="car ">
            <div className="old">
              <div className="old-bot">
                <div className="bumper"></div>
                <div className="fog-light"></div>
                <div className="brand"></div>
              </div>
              <div className="mid-old">
                <div className="old-mid left">
                  <div className="lamp left"></div>
                </div>
                <div className="old-mid right">
                  <div className="lamp right"></div>
                </div>
              </div>
              <div className="top-old">
                <div className="old-top left">
                  <div className="hood"></div>
                  <div className="mirror"></div>
                </div>
                <div className="old-top right">
                  <div className="hood"></div>
                  <div className="mirror r"></div>
                </div>
                <div className="interior">
                  <div className="back-mirror"></div>
                  <div className="back-window">
                    <div className="seat"></div>
                  </div>
                </div>
                <div className="motor-line"></div>
                <div className="front-lines"></div>
                <div className="bumper-line l"></div>
                <div className="bumper-line r"></div>
              </div>
            </div>
            <div className="ground"></div>
          </div>
        </div>
      </Container>
    </Box>
  );
};
