import SolutionHero from './solutionHero'
import SolutionHeroTwo from './solutionHeroTwo'
import SVGScrollBar from './SVGScrollBar';

function Solution() {
  return (
    <div className='flex flex-col'> <SolutionHero /> <SVGScrollBar/> <SolutionHeroTwo /></div>
  );
}

export default Solution;