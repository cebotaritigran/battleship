(()=>{"use strict";let s=!1,t=((s,t)=>{let e=0;return{shipLength:2,hitNumber:()=>(e++,e),isSunk:()=>e>=2,shipPosition:[0,10,20,30]}})();console.log(t.shipPosition);let e=[t.shipPosition,[4,14],[9,29],[35,45],[49,69],[65,75],[61,62,63],[81,82,83]];console.log(e[0]);const i=document.getElementsByClassName("gridContainer"),a=document.getElementsByClassName("gridBox");function l(t,i){console.log("hey"),4==e[t].length?(e[t][i]+1)%10!=0&&(0==s?(a[e[t][0]+1].classList.add("shipPart"),a[e[t][0]+1].addEventListener("click",l(t,i)),a[e[t][0]+10].classList.remove("shipPart"),a[e[t][0]+2].classList.add("shipPart"),a[e[t][0]+20].classList.remove("shipPart"),a[e[t][0]+3].classList.add("shipPart"),a[e[t][0]+30].classList.remove("shipPart"),s=!0):(a[e[t][0]+1].classList.remove("shipPart"),a[e[t][0]+10].classList.add("shipPart"),a[e[t][0]+2].classList.remove("shipPart"),a[e[t][0]+20].classList.add("shipPart"),a[e[t][0]+3].classList.remove("shipPart"),a[e[t][0]+30].classList.add("shipPart"),s=!1)):3==e[t].length?(e[t][i]+1)%10!=0&&(0==s?(a[e[t][0]+1].classList.add("shipPart"),a[e[t][0]+10].classList.remove("shipPart"),a[e[t][0]+2].classList.add("shipPart"),a[e[t][0]+20].classList.remove("shipPart"),s=!0):(a[e[t][0]+1].classList.remove("shipPart"),a[e[t][0]+10].classList.add("shipPart"),a[e[t][0]+2].classList.remove("shipPart"),a[e[t][0]+20].classList.add("shipPart"),s=!1)):2==e[t].length&&(e[t][i]+1)%10!=0&&(0==s?(a[e[t][0]+1].classList.add("shipPart"),a[e[t][0]+10].classList.remove("shipPart"),s=!0):(a[e[t][0]+1].classList.remove("shipPart"),a[e[t][0]+10].classList.add("shipPart"),s=!1))}document.body.style.backgroundColor="black",function(){for(let s=0;s<100;s++){const t=document.createElement("div");t.classList.add("gridBox"),t.setAttribute("value",s),t.setAttribute("id",s),i[0].appendChild(t)}!function(){for(let s=0;s<e.length;s++)for(let t=0;t<e[s].length;t++)a[e[s][t]].classList.add("shipPart"),document.getElementsByClassName("shipPart"),a[e[s][t]].addEventListener("click",(()=>{l(s,t)})),console.log("hey"),document.body.style.backgroundColor="white"}()}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxZQUN2Q0wsRUFBUUosRUFBTU0sR0FBRyxHQUFLLElBQUlFLFVBQVVHLE9BQU8sWUFDM0N2QixHQUFTLElBRVRnQixFQUFRSixFQUFNTSxHQUFHLEdBQUssR0FBR0UsVUFBVUcsT0FBTyxZQUMxQ1AsRUFBUUosRUFBTU0sR0FBRyxHQUFLLElBQUlFLFVBQVVDLElBQUksWUFDeENyQixHQUFTLEdBSXpCLENDbkdBYyxTQUFTVSxLQUFLQyxNQUFNQyxnQkFBa0IsUURXdEMsV0FFSSxJQUFLLElBQUlQLEVBQUksRUFBR0EsRUFBSSxJQUFLQSxJQUFLLENBQzFCLE1BQU1RLEVBQU1iLFNBQVNjLGNBQWMsT0FDbkNELEVBQUlQLFVBQVVDLElBQUksV0FDbEJNLEVBQUlFLGFBQWEsUUFBU1YsR0FDMUJRLEVBQUlFLGFBQWEsS0FBTVYsR0FDdkJOLEVBQWMsR0FBR2lCLFlBQVlILEVBQ2pDLEVBTUosV0FDSSxJQUFLLElBQUlULEVBQUksRUFBR0EsRUFBSU4sRUFBTVYsT0FBUWdCLElBQzlCLElBQUssSUFBSUMsRUFBSSxFQUFHQSxFQUFJUCxFQUFNTSxHQUFHaEIsT0FBUWlCLElBQ2pDSCxFQUFRSixFQUFNTSxHQUFHQyxJQUFJQyxVQUFVQyxJQUFJLFlBQ3BCUCxTQUFTQyx1QkFBdUIsWUFDL0NDLEVBQVFKLEVBQU1NLEdBQUdDLElBQUlHLGlCQUFpQixTQUFTLEtBQzNDTCxFQUFZQyxFQUFHQyxFQUFFLElBR3JCVCxRQUFRQyxJQUFJLE9BQ1pHLFNBQVNVLEtBQUtDLE1BQU1DLGdCQUFrQixPQUdsRCxDQWxCSUssRUFHSixDQ3RCQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNoaXAgZmFjdG9yeSBmdW5jdGlvbiwgY291bGQgYmUgZG9uZSB3aXRoIGNsYXNzZXNcbmxldCBTaGlwID0gKGxlbmd0aCwgcG9zaXRpb24pID0+IHtcbiAgICAvLyB3ZSBuZWVkIHNoaXAgbGVuZ3RoIHNvIHRoYXQgd2UgY2FuIGNoZWNrIGlmIHRoZSBzaGlwIGlzIHN1bmsgYnlcbiAgICAvLyB1c2luZyBhIHNpbXBsZSBjb25kaXRpb24gb24gaG93IG11Y2ggaGl0IGhhcyB0aGUgc2hpcCB0b29rIGFuZCBpZiBpdHNcbiAgICAvLyBlcXVhbCB0byB0aGUgc2hpcCdzIGxlbmd0aCB0aGVuIHNoaXAgaGFzIHN1bmtcbiAgICBsZXQgc2hpcExlbmd0aCA9IGxlbmd0aFxuICAgIGxldCBoaXQgPSAwXG4gICAgbGV0IHNoaXBQb3NpdGlvbiA9IHBvc2l0aW9uXG5cbiAgICBsZXQgaXNTdW5rID0gKCkgPT4ge1xuICAgICAgICBpZiAoaGl0ID49IHNoaXBMZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgaGl0TnVtYmVyID0gKCkgPT4ge1xuICAgICAgICBoaXQrKztcblxuICAgICAgICByZXR1cm4gaGl0O1xuICAgIH1cbiAgICByZXR1cm4geyBzaGlwTGVuZ3RoLCBoaXROdW1iZXIsIGlzU3Vuaywgc2hpcFBvc2l0aW9uIH1cbn1cblxuZXhwb3J0IHsgU2hpcCB9IiwiaW1wb3J0IHsgR2FtZUJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcFwiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyXCI7XG5sZXQgcm90YXRlID0gZmFsc2U7XG5sZXQgdGlncml0cyA9IFBsYXllcihcInRpZ3JpdHNcIilcbmxldCBkZXN0cm95ZXIgPSBTaGlwKDIsIFswLCAxMCwgMjAsIDMwXSlcbmNvbnNvbGUubG9nKGRlc3Ryb3llci5zaGlwUG9zaXRpb24pXG5sZXQgc2hpcHMgPSBbZGVzdHJveWVyLnNoaXBQb3NpdGlvbiwgWzQsIDE0XSwgWzksIDI5XSwgWzM1LCA0NV0sIFs0OSwgNjldLCBbNjUsIDc1XSwgWzYxLCA2MiwgNjNdLCBbODEsIDgyLCA4M11dXG5cbmNvbnNvbGUubG9nKHNoaXBzWzBdKVxuY29uc3QgZ3JpZENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2dyaWRDb250YWluZXInKTtcblxuY29uc3QgZ3JpZEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2dyaWRCb3gnKTtcblxuXG5mdW5jdGlvbiBjcmVhdGVCb2FyZFBsYXllck9uZSgpIHtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2dyaWRCb3gnKTtcbiAgICAgICAgZGl2LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGkpXG4gICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpKVxuICAgICAgICBncmlkQ29udGFpbmVyWzBdLmFwcGVuZENoaWxkKGRpdik7XG4gICAgfVxuICAgIHJlZnJlc2hCb2FyZCgpXG5cblxufVxuXG5mdW5jdGlvbiByZWZyZXNoQm9hcmQoKSB7XG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCBzaGlwcy5sZW5ndGg7IGsrKykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzW2tdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBncmlkQm94W3NoaXBzW2tdW2ldXS5jbGFzc0xpc3QuYWRkKCdzaGlwUGFydCcpXG4gICAgICAgICAgICBsZXQgc2hpcFBhcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzaGlwUGFydCcpO1xuICAgICAgICAgICAgZ3JpZEJveFtzaGlwc1trXVtpXV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcm90YXRlU2hpcHMoaywgaSk7XG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImhleVwiKVxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuZnVuY3Rpb24gcm90YXRlU2hpcHMoaywgaSkge1xuICAgIGNvbnNvbGUubG9nKFwiaGV5XCIpXG4gICAgaWYgKHNoaXBzW2tdLmxlbmd0aCA9PSA0KSB7XG4gICAgICAgIGlmICgoc2hpcHNba11baV0gKyAxKSAlIDEwICE9PSAwKSB7XG4gICAgICAgICAgICBpZiAocm90YXRlID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgZ3JpZEJveFtzaGlwc1trXVswXSArIDFdLmNsYXNzTGlzdC5hZGQoJ3NoaXBQYXJ0Jyk7XG4gICAgICAgICAgICAgICAgZ3JpZEJveFtzaGlwc1trXVswXSArIDFdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxyb3RhdGVTaGlwcyhrLGkpKVxuICAgICAgICAgICAgICAgIGdyaWRCb3hbc2hpcHNba11bMF0gKyAxMF0uY2xhc3NMaXN0LnJlbW92ZSgnc2hpcFBhcnQnKTtcbiAgICAgICAgICAgICAgICBncmlkQm94W3NoaXBzW2tdWzBdICsgMl0uY2xhc3NMaXN0LmFkZCgnc2hpcFBhcnQnKTtcbiAgICAgICAgICAgICAgICBncmlkQm94W3NoaXBzW2tdWzBdICsgMjBdLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXBQYXJ0Jyk7XG4gICAgICAgICAgICAgICAgZ3JpZEJveFtzaGlwc1trXVswXSArIDNdLmNsYXNzTGlzdC5hZGQoJ3NoaXBQYXJ0Jyk7XG4gICAgICAgICAgICAgICAgZ3JpZEJveFtzaGlwc1trXVswXSArIDMwXS5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwUGFydCcpO1xuXG4gICAgICAgICAgICAgICAgcm90YXRlID0gdHJ1ZTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBncmlkQm94W3NoaXBzW2tdWzBdICsgMV0uY2xhc3NMaXN0LnJlbW92ZSgnc2hpcFBhcnQnKVxuICAgICAgICAgICAgICAgIGdyaWRCb3hbc2hpcHNba11bMF0gKyAxMF0uY2xhc3NMaXN0LmFkZCgnc2hpcFBhcnQnKTtcbiAgICAgICAgICAgICAgICBncmlkQm94W3NoaXBzW2tdWzBdICsgMl0uY2xhc3NMaXN0LnJlbW92ZSgnc2hpcFBhcnQnKTtcbiAgICAgICAgICAgICAgICBncmlkQm94W3NoaXBzW2tdWzBdICsgMjBdLmNsYXNzTGlzdC5hZGQoJ3NoaXBQYXJ0Jyk7XG4gICAgICAgICAgICAgICAgZ3JpZEJveFtzaGlwc1trXVswXSArIDNdLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXBQYXJ0Jyk7XG4gICAgICAgICAgICAgICAgZ3JpZEJveFtzaGlwc1trXVswXSArIDMwXS5jbGFzc0xpc3QuYWRkKCdzaGlwUGFydCcpO1xuXG4gICAgICAgICAgICAgICAgcm90YXRlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNoaXBzW2tdLmxlbmd0aCA9PSAzKSB7XG4gICAgICAgIGlmICgoc2hpcHNba11baV0gKyAxKSAlIDEwICE9PSAwKSB7XG5cbiAgICAgICAgICAgIGlmIChyb3RhdGUgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBncmlkQm94W3NoaXBzW2tdWzBdICsgMV0uY2xhc3NMaXN0LmFkZCgnc2hpcFBhcnQnKVxuICAgICAgICAgICAgICAgIGdyaWRCb3hbc2hpcHNba11bMF0gKyAxMF0uY2xhc3NMaXN0LnJlbW92ZSgnc2hpcFBhcnQnKTtcbiAgICAgICAgICAgICAgICBncmlkQm94W3NoaXBzW2tdWzBdICsgMl0uY2xhc3NMaXN0LmFkZCgnc2hpcFBhcnQnKTtcbiAgICAgICAgICAgICAgICBncmlkQm94W3NoaXBzW2tdWzBdICsgMjBdLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXBQYXJ0Jyk7XG4gICAgICAgICAgICAgICAgcm90YXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZ3JpZEJveFtzaGlwc1trXVswXSArIDFdLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXBQYXJ0JylcbiAgICAgICAgICAgICAgICBncmlkQm94W3NoaXBzW2tdWzBdICsgMTBdLmNsYXNzTGlzdC5hZGQoJ3NoaXBQYXJ0Jyk7XG4gICAgICAgICAgICAgICAgZ3JpZEJveFtzaGlwc1trXVswXSArIDJdLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXBQYXJ0Jyk7XG4gICAgICAgICAgICAgICAgZ3JpZEJveFtzaGlwc1trXVswXSArIDIwXS5jbGFzc0xpc3QuYWRkKCdzaGlwUGFydCcpO1xuICAgICAgICAgICAgICAgIHJvdGF0ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNoaXBzW2tdLmxlbmd0aCA9PSAyKSB7XG4gICAgICAgIGlmICgoc2hpcHNba11baV0gKyAxKSAlIDEwICE9PSAwKSB7XG5cbiAgICAgICAgICAgIGlmIChyb3RhdGUgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBncmlkQm94W3NoaXBzW2tdWzBdICsgMV0uY2xhc3NMaXN0LmFkZCgnc2hpcFBhcnQnKVxuICAgICAgICAgICAgICAgIGdyaWRCb3hbc2hpcHNba11bMF0gKyAxMF0uY2xhc3NMaXN0LnJlbW92ZSgnc2hpcFBhcnQnKTtcbiAgICAgICAgICAgICAgICByb3RhdGUgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBncmlkQm94W3NoaXBzW2tdWzBdICsgMV0uY2xhc3NMaXN0LnJlbW92ZSgnc2hpcFBhcnQnKVxuICAgICAgICAgICAgICAgIGdyaWRCb3hbc2hpcHNba11bMF0gKyAxMF0uY2xhc3NMaXN0LmFkZCgnc2hpcFBhcnQnKTtcbiAgICAgICAgICAgICAgICByb3RhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHsgY3JlYXRlQm9hcmRQbGF5ZXJPbmUgfSIsImltcG9ydCB7IEdhbWVCb2FyZCB9IGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IHsgY3JlYXRlQm9hcmRQbGF5ZXJPbmUgfSBmcm9tIFwiLi9kb21cIjtcbmRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJibGFja1wiO1xuY3JlYXRlQm9hcmRQbGF5ZXJPbmUoKTtcbi8vZ2FtZSBsb29wIHdoZXJlIGdhbWUgd2lsbCBiZSBwbGF5ZWRcblxuIl0sIm5hbWVzIjpbInJvdGF0ZSIsImRlc3Ryb3llciIsImxlbmd0aCIsInBvc2l0aW9uIiwiaGl0Iiwic2hpcExlbmd0aCIsImhpdE51bWJlciIsImlzU3VuayIsInNoaXBQb3NpdGlvbiIsIlNoaXAiLCJjb25zb2xlIiwibG9nIiwic2hpcHMiLCJncmlkQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZ3JpZEJveCIsInJvdGF0ZVNoaXBzIiwiayIsImkiLCJjbGFzc0xpc3QiLCJhZGQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlIiwiYm9keSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImFwcGVuZENoaWxkIiwicmVmcmVzaEJvYXJkIiwiY3JlYXRlQm9hcmRQbGF5ZXJPbmUiXSwic291cmNlUm9vdCI6IiJ9