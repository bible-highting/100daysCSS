const quotes = [
  {
    quote:"시간은 아득히 별들의 밑을 운행하고 있다",
    author:"최승자 <선잠>",
  },
  {
    quote:"하지만 인생이란 원래 이토록 미완성이다",
    author:"<대학일기>"
  },
  {
    quote:"꽃은 모두 열매가 되려 하고 아침은 모두 저녁이 되려 한다.",
    author:"헤르만 헤세 <마른 잎>",
  },
  {
    quote:"삶이 한낱 꿈에 불과하다지만 그럼에도 살아서 좋았다.",
    author:"<눈이 부시게>",
  },
  {
    quote:"누구도 우연히 당신에게 오지 않는다.",
    author:"류시화 <누구도 우연히 당신에게 오지 않는다>",
  },
  {
    quote:"면이 딸려 들어오면 뱉지 말고 같이 먹어요.",
    author:"이영자",
  },
  {
    quote:"모든 일에 있어서, 시간이 부족하지 않을까를 걱정하지 말고 다만 내가 마음을 바쳐 최선을 다할 수 있을지, 그것을 걱정하라",
    author:"정조 <홍재전서 175권>",
  },
  {
    quote:"북 치고 장구 치고 니 하고싶은대로 치다 보면 그 장단에 맞추고 싶은 사람들이 와서 춤추는거여",
    author:"박막례",
  },
  {
    quote:"일상이 우리가 가진 유일한 인생인데 말이야",
    author:"정혜윤 <사생활의 천재들>",
  },
  {
    quote:"무용함과 무용은 한 끗차이라 하릴없이 삐걱대는 나날도 전부 춤이었다고 말이다.",
    author:"정지음 <젊은 ADHD의 슬픔>",
  },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;