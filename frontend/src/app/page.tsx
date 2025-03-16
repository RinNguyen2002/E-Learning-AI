import Profile from "../components/Profile";

export const dynamic = "force-dynamic"; // Tắt prerendering

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Home Page</h1>
      <Profile />
    </div>
  );
}