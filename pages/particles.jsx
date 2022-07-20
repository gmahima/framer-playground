import { ParticlesContainer } from "../components/Particles";
import { lorem } from "../data";

export default function particles() {
  return (
    <div>
      <ParticlesContainer></ParticlesContainer>
      <div>{lorem.long}</div>
    </div>
  );
}
