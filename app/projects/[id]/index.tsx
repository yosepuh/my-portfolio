import Link from "next/link";
import projects from "@/app/data/projectsData";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1a] text-gray-200 p-6">
      <h1 className="text-4xl font-bold text-[#00aaff] mb-8">My Projects</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-4 bg-gray-900 rounded shadow hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-400 mb-2">{project.date}</p>
            <p className="mb-4">{project.description}</p>
            <Link href={project.detailPath}>
              <button className="px-4 py-2 bg-[#0077cc] hover:bg-[#005fa3] rounded transition-colors">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
