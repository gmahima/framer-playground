import { PlaceholderText } from "../components";
import { Stagger } from "../components/Stagger";
import { lorem } from "../data";
export default function StaggerPage() {
  return (
    <>
      <h1>scroll down to see staggered children</h1>
      <PlaceholderText></PlaceholderText>
      <Stagger />
      <PlaceholderText></PlaceholderText>
    </>
  );
}
