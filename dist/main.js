(()=>{"use strict";document.body.style.backgroundColor="black",function(){let s=((s,t)=>{let e=0;return{shipLength:2,hitNumber:()=>(e++,e),isSunk:()=>e>=2,shipPosition:[0,1]}})();console.log(s.shipPosition);let t=[s.shipPosition,[5,15],[9,29],[35,45],[49,69],[65,75],[61,62,63],[81,82,83]];console.log(t[0]);const e=document.getElementsByClassName("gridContainer");for(let s=0;s<100;s++){const t=document.createElement("div");t.classList.add("gridBox"),t.setAttribute("value",s),t.setAttribute("id",s),e[0].appendChild(t)}const o=document.getElementsByClassName("gridBox");for(let s=0;s<t.length;s++)for(let e=0;e<t[s].length;e++){o[t[s][e]].classList.add("shipPart"),document.getElementsByClassName("shipPart");let i=!1;o[t[s][e]].addEventListener("click",(()=>{console.log("hey"),t[s].length>=3&&(t[s][e]+1)%10!=0&&(console.log((t[s][e]+1)/10),0==i?(o[t[s][e]+1].classList.add("shipPart"),o[t[s][e]+10].classList.remove("shipPart"),o[t[s][e]+2].classList.add("shipPart"),o[t[s][e]+20].classList.remove("shipPart"),i=!0):(o[t[s][e]+1].classList.remove("shipPart"),o[t[s][e]+10].classList.add("shipPart"),o[t[s][e]+2].classList.remove("shipPart"),o[t[s][e]+20].classList.add("shipPart"),i=!1))}))}console.log("hey"),document.body.style.backgroundColor="white"}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBSUFBLFNBQVNDLEtBQUtDLE1BQU1DLGdCQUFrQixRQ0F0QyxXQUVJLElBQ0lDLEVDTkcsRUFBQ0MsRUFBUUMsS0FJaEIsSUFDSUMsRUFBTSxFQWVWLE1BQU8sQ0FBRUMsV0RkWSxFQ2NBQyxVQUxMLEtBQ1pGLElBRU9BLEdBRXFCRyxPQVpuQixJQUNMSCxHREhhLEVDY21CSSxhRGRoQixDQUFDLEVBQUcsR0NjeUIsRURkckNDLEdBQ2hCQyxRQUFRQyxJQUFJVixFQUFVTyxjQUN0QixJQUFJSSxFQUFRLENBQUNYLEVBQVVPLGFBQWMsQ0FBQyxFQUFHLElBQUssQ0FBQyxFQUFHLElBQUssQ0FBQyxHQUFJLElBQUssQ0FBQyxHQUFJLElBQUssQ0FBQyxHQUFJLElBQUssQ0FBQyxHQUFJLEdBQUksSUFBSyxDQUFDLEdBQUksR0FBSSxLQUM1R0UsUUFBUUMsSUFBSUMsRUFBTSxJQUVsQixNQUFNQyxFQUFnQmhCLFNBQVNpQix1QkFBdUIsaUJBRXRELElBQUssSUFBSUMsRUFBSSxFQUFHQSxFQUFJLElBQUtBLElBQUssQ0FDMUIsTUFBTUMsRUFBTW5CLFNBQVNvQixjQUFjLE9BQ25DRCxFQUFJRSxVQUFVQyxJQUFJLFdBQ2xCSCxFQUFJSSxhQUFhLFFBQVNMLEdBQzFCQyxFQUFJSSxhQUFhLEtBQU1MLEdBQ3ZCRixFQUFjLEdBQUdRLFlBQVlMLEVBQ2pDLENBQ0EsTUFBTU0sRUFBVXpCLFNBQVNpQix1QkFBdUIsV0FDaEQsSUFBSyxJQUFJUyxFQUFJLEVBQUdBLEVBQUlYLEVBQU1WLE9BQVFxQixJQUc5QixJQUFLLElBQUlSLEVBQUksRUFBR0EsRUFBSUgsRUFBTVcsR0FBR3JCLE9BQVFhLElBQUssQ0FFdENPLEVBQVFWLEVBQU1XLEdBQUdSLElBQUlHLFVBQVVDLElBQUksWUFFcEJ0QixTQUFTaUIsdUJBQXVCLFlBQS9DLElBQ0lVLEdBQVMsRUFDYkYsRUFBUVYsRUFBTVcsR0FBR1IsSUFBSVUsaUJBQWlCLFNBQVMsS0FDM0NmLFFBQVFDLElBQUksT0FDUkMsRUFBTVcsR0FBR3JCLFFBQVUsSUFHZFUsRUFBTVcsR0FBR1IsR0FBSyxHQUFLLElBQU8sSUFDM0JMLFFBQVFDLEtBQUtDLEVBQU1XLEdBQUdSLEdBQUssR0FBSyxJQUNsQixHQUFWUyxHQUNBRixFQUFRVixFQUFNVyxHQUFHUixHQUFLLEdBQUdHLFVBQVVDLElBQUksWUFDdkNHLEVBQVFWLEVBQU1XLEdBQUdSLEdBQUssSUFBSUcsVUFBVVEsT0FBTyxZQUMzQ0osRUFBUVYsRUFBTVcsR0FBR1IsR0FBSyxHQUFHRyxVQUFVQyxJQUFJLFlBQ3ZDRyxFQUFRVixFQUFNVyxHQUFHUixHQUFLLElBQUlHLFVBQVVRLE9BQU8sWUFDM0NGLEdBQVMsSUFFVEYsRUFBUVYsRUFBTVcsR0FBR1IsR0FBSyxHQUFHRyxVQUFVUSxPQUFPLFlBQzFDSixFQUFRVixFQUFNVyxHQUFHUixHQUFLLElBQUlHLFVBQVVDLElBQUksWUFDeENHLEVBQVFWLEVBQU1XLEdBQUdSLEdBQUssR0FBR0csVUFBVVEsT0FBTyxZQUMxQ0osRUFBUVYsRUFBTVcsR0FBR1IsR0FBSyxJQUFJRyxVQUFVQyxJQUFJLFlBQ3hDSyxHQUFTLEdBSXJCLEdBR1IsQ0FHSmQsUUFBUUMsSUFBSSxPQUNaZCxTQUFTQyxLQUFLQyxNQUFNQyxnQkFBa0IsT0FDMUMsQ0R4REEyQixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2FtZUJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcFwiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgeyBjcmVhdGVCb2FyZFBsYXllck9uZSB9IGZyb20gXCIuL2RvbVwiO1xuZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImJsYWNrXCI7XG5jcmVhdGVCb2FyZFBsYXllck9uZSgpO1xuLy9nYW1lIGxvb3Agd2hlcmUgZ2FtZSB3aWxsIGJlIHBsYXllZFxuXG4iLCJpbXBvcnQgeyBHYW1lQm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9zaGlwXCI7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcblxuZnVuY3Rpb24gY3JlYXRlQm9hcmRQbGF5ZXJPbmUoKSB7XG5cbiAgICBsZXQgdGlncml0cyA9IFBsYXllcihcInRpZ3JpdHNcIilcbiAgICBsZXQgZGVzdHJveWVyID0gU2hpcCgyLCBbMCwgMV0pXG4gICAgY29uc29sZS5sb2coZGVzdHJveWVyLnNoaXBQb3NpdGlvbilcbiAgICBsZXQgc2hpcHMgPSBbZGVzdHJveWVyLnNoaXBQb3NpdGlvbiwgWzUsIDE1XSwgWzksIDI5XSwgWzM1LCA0NV0sIFs0OSwgNjldLCBbNjUsIDc1XSwgWzYxLCA2MiwgNjNdLCBbODEsIDgyLCA4M11dXG4gICAgY29uc29sZS5sb2coc2hpcHNbMF0pXG5cbiAgICBjb25zdCBncmlkQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZ3JpZENvbnRhaW5lcicpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnZ3JpZEJveCcpO1xuICAgICAgICBkaXYuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgaSlcbiAgICAgICAgZGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIGkpXG4gICAgICAgIGdyaWRDb250YWluZXJbMF0uYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICB9XG4gICAgY29uc3QgZ3JpZEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2dyaWRCb3gnKTtcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IHNoaXBzLmxlbmd0aDsgaysrKSB7XG5cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzW2tdLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgIGdyaWRCb3hbc2hpcHNba11baV1dLmNsYXNzTGlzdC5hZGQoJ3NoaXBQYXJ0JylcblxuICAgICAgICAgICAgbGV0IHNoaXBQYXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2hpcFBhcnQnKTtcbiAgICAgICAgICAgIGxldCByb3RhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIGdyaWRCb3hbc2hpcHNba11baV1dLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGV5XCIpXG4gICAgICAgICAgICAgICAgaWYgKHNoaXBzW2tdLmxlbmd0aCA+PSAzKSB7XG5cblxuICAgICAgICAgICAgICAgICAgICBpZiAoKHNoaXBzW2tdW2ldICsgMSkgJSAxMCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coKHNoaXBzW2tdW2ldICsgMSkgLyAxMClcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyb3RhdGUgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkQm94W3NoaXBzW2tdW2ldICsgMV0uY2xhc3NMaXN0LmFkZCgnc2hpcFBhcnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWRCb3hbc2hpcHNba11baV0gKyAxMF0uY2xhc3NMaXN0LnJlbW92ZSgnc2hpcFBhcnQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkQm94W3NoaXBzW2tdW2ldICsgMl0uY2xhc3NMaXN0LmFkZCgnc2hpcFBhcnQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkQm94W3NoaXBzW2tdW2ldICsgMjBdLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXBQYXJ0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZEJveFtzaGlwc1trXVtpXSArIDFdLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXBQYXJ0JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkQm94W3NoaXBzW2tdW2ldICsgMTBdLmNsYXNzTGlzdC5hZGQoJ3NoaXBQYXJ0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZEJveFtzaGlwc1trXVtpXSArIDJdLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXBQYXJ0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZEJveFtzaGlwc1trXVtpXSArIDIwXS5jbGFzc0xpc3QuYWRkKCdzaGlwUGFydCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcImhleVwiKVxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xufVxuXG5leHBvcnQgeyBjcmVhdGVCb2FyZFBsYXllck9uZSB9IiwiLy8gc2hpcCBmYWN0b3J5IGZ1bmN0aW9uLCBjb3VsZCBiZSBkb25lIHdpdGggY2xhc3Nlc1xubGV0IFNoaXAgPSAobGVuZ3RoLCBwb3NpdGlvbikgPT4ge1xuICAgIC8vIHdlIG5lZWQgc2hpcCBsZW5ndGggc28gdGhhdCB3ZSBjYW4gY2hlY2sgaWYgdGhlIHNoaXAgaXMgc3VuayBieVxuICAgIC8vIHVzaW5nIGEgc2ltcGxlIGNvbmRpdGlvbiBvbiBob3cgbXVjaCBoaXQgaGFzIHRoZSBzaGlwIHRvb2sgYW5kIGlmIGl0c1xuICAgIC8vIGVxdWFsIHRvIHRoZSBzaGlwJ3MgbGVuZ3RoIHRoZW4gc2hpcCBoYXMgc3Vua1xuICAgIGxldCBzaGlwTGVuZ3RoID0gbGVuZ3RoXG4gICAgbGV0IGhpdCA9IDBcbiAgICBsZXQgc2hpcFBvc2l0aW9uID0gcG9zaXRpb25cblxuICAgIGxldCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgICAgIGlmIChoaXQgPj0gc2hpcExlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuICAgIGxldCBoaXROdW1iZXIgPSAoKSA9PiB7XG4gICAgICAgIGhpdCsrO1xuXG4gICAgICAgIHJldHVybiBoaXQ7XG4gICAgfVxuICAgIHJldHVybiB7IHNoaXBMZW5ndGgsIGhpdE51bWJlciwgaXNTdW5rLCBzaGlwUG9zaXRpb24gfVxufVxuXG5leHBvcnQgeyBTaGlwIH0iXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkZXN0cm95ZXIiLCJsZW5ndGgiLCJwb3NpdGlvbiIsImhpdCIsInNoaXBMZW5ndGgiLCJoaXROdW1iZXIiLCJpc1N1bmsiLCJzaGlwUG9zaXRpb24iLCJTaGlwIiwiY29uc29sZSIsImxvZyIsInNoaXBzIiwiZ3JpZENvbnRhaW5lciIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJpIiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInNldEF0dHJpYnV0ZSIsImFwcGVuZENoaWxkIiwiZ3JpZEJveCIsImsiLCJyb3RhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlIiwiY3JlYXRlQm9hcmRQbGF5ZXJPbmUiXSwic291cmNlUm9vdCI6IiJ9