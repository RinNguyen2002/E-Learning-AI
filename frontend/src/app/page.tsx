import Profile from "../components/Profile";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Home Page</h1>
      <Profile /> {/* Hiển thị component Profile */}
    </div>
  );
}
