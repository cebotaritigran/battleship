(()=>{"use strict";document.body.style.backgroundColor="black",function(){let t=((t,e)=>{let s=0;return{shipLength:2,hitNumber:()=>(s++,s),isSunk:()=>s>=2,shipPosition:[0,1]}})();console.log(t.shipPosition);let e=[t.shipPosition,[5,15],[9,29],[35,45],[49,69],[65,75],[61,62,63],[81,82,83]];console.log(e[0]);const s=document.getElementsByClassName("gridContainer");for(let t=0;t<100;t++){const e=document.createElement("div");e.classList.add("gridBox"),e.setAttribute("value",t),e.setAttribute("id",t),s[0].appendChild(e)}for(let t=0;t<e.length;t++){const t=document.getElementsByClassName("gridBox");for(let s=0;s<e[0].length;s++){t[e[0][s]].classList.add("shipPart");let o=document.getElementsByClassName("shipPart"),i=!1;o[s].addEventListener("click",(()=>{0==i?(t[s+1].classList.add("shipPart"),t[s+10].classList.add("shipPart"),i=!0):(t[s+1].classList.remove("shipPart"),t[s+10].classList.remove("shipPart"),i=!1)}))}}console.log("hey"),document.body.style.backgroundColor="white"}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBSUFBLFNBQVNDLEtBQUtDLE1BQU1DLGdCQUFrQixRQ0F0QyxXQUVJLElBQ0lDLEVDTkcsRUFBQ0MsRUFBUUMsS0FJaEIsSUFDSUMsRUFBTSxFQWVWLE1BQU8sQ0FBRUMsV0RkWSxFQ2NBQyxVQUxMLEtBQ1pGLElBRU9BLEdBRXFCRyxPQVpuQixJQUNMSCxHREhhLEVDY21CSSxhRGRoQixDQUFDLEVBQUcsR0NjeUIsRURkckNDLEdBQ2hCQyxRQUFRQyxJQUFJVixFQUFVTyxjQUN0QixJQUFJSSxFQUFRLENBQUNYLEVBQVVPLGFBQWMsQ0FBQyxFQUFHLElBQUssQ0FBQyxFQUFHLElBQUssQ0FBQyxHQUFJLElBQUssQ0FBQyxHQUFJLElBQUssQ0FBQyxHQUFJLElBQUssQ0FBQyxHQUFJLEdBQUksSUFBSyxDQUFDLEdBQUksR0FBSSxLQUM1R0UsUUFBUUMsSUFBSUMsRUFBTSxJQUVsQixNQUFNQyxFQUFnQmhCLFNBQVNpQix1QkFBdUIsaUJBRXRELElBQUssSUFBSUMsRUFBSSxFQUFHQSxFQUFJLElBQUtBLElBQUssQ0FDMUIsTUFBTUMsRUFBTW5CLFNBQVNvQixjQUFjLE9BQ25DRCxFQUFJRSxVQUFVQyxJQUFJLFdBQ2xCSCxFQUFJSSxhQUFhLFFBQVNMLEdBQzFCQyxFQUFJSSxhQUFhLEtBQU1MLEdBQ3ZCRixFQUFjLEdBQUdRLFlBQVlMLEVBQ2pDLENBRUEsSUFBSyxJQUFJTSxFQUFJLEVBQUdBLEVBQUlWLEVBQU1WLE9BQVFvQixJQUFLLENBQ25DLE1BQU1DLEVBQVUxQixTQUFTaUIsdUJBQXVCLFdBRWhELElBQUssSUFBSUMsRUFBSSxFQUFHQSxFQUFJSCxFQUFNLEdBQUdWLE9BQVFhLElBQUssQ0FFdENRLEVBQVFYLEVBQU0sR0FBR0csSUFBSUcsVUFBVUMsSUFBSSxZQUNuQyxJQUFJSyxFQUFXM0IsU0FBU2lCLHVCQUF1QixZQUMzQ1csR0FBUyxFQUNiRCxFQUFTVCxHQUFHVyxpQkFBaUIsU0FBUyxLQUNyQixHQUFWRCxHQUNDRixFQUFRUixFQUFJLEdBQUlHLFVBQVVDLElBQUksWUFDOUJJLEVBQVFSLEVBQUksSUFBSUcsVUFBVUMsSUFBSSxZQUM5Qk0sR0FBUyxJQUVURixFQUFRUixFQUFJLEdBQUlHLFVBQVVTLE9BQU8sWUFDakNKLEVBQVFSLEVBQUksSUFBSUcsVUFBVVMsT0FBTyxZQUNqQ0YsR0FBUyxFQUViLEdBR1IsQ0FDSixDQUVBZixRQUFRQyxJQUFJLE9BQ1pkLFNBQVNDLEtBQUtDLE1BQU1DLGdCQUFrQixPQUMxQyxDRDNDQTRCLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYW1lQm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9zaGlwXCI7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCB7IGNyZWF0ZUJvYXJkUGxheWVyT25lIH0gZnJvbSBcIi4vZG9tXCI7XG5kb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiYmxhY2tcIjtcbmNyZWF0ZUJvYXJkUGxheWVyT25lKCk7XG4vL2dhbWUgbG9vcCB3aGVyZSBnYW1lIHdpbGwgYmUgcGxheWVkXG5cbiIsImltcG9ydCB7IEdhbWVCb2FyZCB9IGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xuXG5mdW5jdGlvbiBjcmVhdGVCb2FyZFBsYXllck9uZSgpIHtcblxuICAgIGxldCB0aWdyaXRzID0gUGxheWVyKFwidGlncml0c1wiKVxuICAgIGxldCBkZXN0cm95ZXIgPSBTaGlwKDIsIFswLCAxXSlcbiAgICBjb25zb2xlLmxvZyhkZXN0cm95ZXIuc2hpcFBvc2l0aW9uKVxuICAgIGxldCBzaGlwcyA9IFtkZXN0cm95ZXIuc2hpcFBvc2l0aW9uLCBbNSwgMTVdLCBbOSwgMjldLCBbMzUsIDQ1XSwgWzQ5LCA2OV0sIFs2NSwgNzVdLCBbNjEsIDYyLCA2M10sIFs4MSwgODIsIDgzXV1cbiAgICBjb25zb2xlLmxvZyhzaGlwc1swXSlcblxuICAgIGNvbnN0IGdyaWRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdncmlkQ29udGFpbmVyJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdncmlkQm94Jyk7XG4gICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBpKVxuICAgICAgICBkaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgaSlcbiAgICAgICAgZ3JpZENvbnRhaW5lclswXS5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH1cblxuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgc2hpcHMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgY29uc3QgZ3JpZEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2dyaWRCb3gnKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzWzBdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvL2dyaWRCb3hbc2hpcHNbMF1baV1dLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKVxuICAgICAgICAgICAgZ3JpZEJveFtzaGlwc1swXVtpXV0uY2xhc3NMaXN0LmFkZCgnc2hpcFBhcnQnKVxuICAgICAgICAgICAgbGV0IHNoaXBQYXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2hpcFBhcnQnKTtcbiAgICAgICAgICAgIGxldCByb3RhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHNoaXBQYXJ0W2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHJvdGF0ZSA9PSBmYWxzZSl7XG4gICAgICAgICAgICAgICAgICAgIGdyaWRCb3hbaSArIDFdLiBjbGFzc0xpc3QuYWRkKCdzaGlwUGFydCcpXG4gICAgICAgICAgICAgICAgICAgIGdyaWRCb3hbaSArIDEwXS5jbGFzc0xpc3QuYWRkKCdzaGlwUGFydCcpO1xuICAgICAgICAgICAgICAgICAgICByb3RhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGdyaWRCb3hbaSArIDFdLiBjbGFzc0xpc3QucmVtb3ZlKCdzaGlwUGFydCcpXG4gICAgICAgICAgICAgICAgICAgIGdyaWRCb3hbaSArIDEwXS5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwUGFydCcpO1xuICAgICAgICAgICAgICAgICAgICByb3RhdGUgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKFwiaGV5XCIpXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUJvYXJkUGxheWVyT25lIH0iLCIvLyBzaGlwIGZhY3RvcnkgZnVuY3Rpb24sIGNvdWxkIGJlIGRvbmUgd2l0aCBjbGFzc2VzXG5sZXQgU2hpcCA9IChsZW5ndGgsIHBvc2l0aW9uKSA9PiB7XG4gICAgLy8gd2UgbmVlZCBzaGlwIGxlbmd0aCBzbyB0aGF0IHdlIGNhbiBjaGVjayBpZiB0aGUgc2hpcCBpcyBzdW5rIGJ5XG4gICAgLy8gdXNpbmcgYSBzaW1wbGUgY29uZGl0aW9uIG9uIGhvdyBtdWNoIGhpdCBoYXMgdGhlIHNoaXAgdG9vayBhbmQgaWYgaXRzXG4gICAgLy8gZXF1YWwgdG8gdGhlIHNoaXAncyBsZW5ndGggdGhlbiBzaGlwIGhhcyBzdW5rXG4gICAgbGV0IHNoaXBMZW5ndGggPSBsZW5ndGhcbiAgICBsZXQgaGl0ID0gMFxuICAgIGxldCBzaGlwUG9zaXRpb24gPSBwb3NpdGlvblxuXG4gICAgbGV0IGlzU3VuayA9ICgpID0+IHtcbiAgICAgICAgaWYgKGhpdCA+PSBzaGlwTGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IGhpdE51bWJlciA9ICgpID0+IHtcbiAgICAgICAgaGl0Kys7XG5cbiAgICAgICAgcmV0dXJuIGhpdDtcbiAgICB9XG4gICAgcmV0dXJuIHsgc2hpcExlbmd0aCwgaGl0TnVtYmVyLCBpc1N1bmssIHNoaXBQb3NpdGlvbiB9XG59XG5cbmV4cG9ydCB7IFNoaXAgfSJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImRlc3Ryb3llciIsImxlbmd0aCIsInBvc2l0aW9uIiwiaGl0Iiwic2hpcExlbmd0aCIsImhpdE51bWJlciIsImlzU3VuayIsInNoaXBQb3NpdGlvbiIsIlNoaXAiLCJjb25zb2xlIiwibG9nIiwic2hpcHMiLCJncmlkQ29udGFpbmVyIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImkiLCJkaXYiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0QXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiLCJrIiwiZ3JpZEJveCIsInNoaXBQYXJ0Iiwicm90YXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZSIsImNyZWF0ZUJvYXJkUGxheWVyT25lIl0sInNvdXJjZVJvb3QiOiIifQ==