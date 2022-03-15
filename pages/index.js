import { Header } from '../components/header'
import { MainHero } from '../components/mainHero'
import { WhyRust } from '../components/whyRust'
import { BuildItInRust } from '../components/buildItInRust'
import { RustInProduction } from '../components/rustInProduction'

export default function Home() {
  return (
		<>
			<Header />
			<MainHero />
			<WhyRust />
			<BuildItInRust />
			<RustInProduction />
		</>
  )
}
