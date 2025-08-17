import projects from '../data/projects.json'

function ProjectCard({ p }) {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-semibold text-blue-600">{p.title}</h3>
      <p className="mt-2 text-gray-700">{p.description}</p>
      <p className="mt-1 text-sm text-gray-500">Tech: {p.tech}</p>
      <div className="mt-3 flex gap-4">
        <a className="text-blue-600 hover:underline" href={p.github} target="_blank" rel="noreferrer">GitHub</a>
        <a className="text-green-600 hover:underline" href={p.demo} target="_blank" rel="noreferrer">Live Demo</a>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-12">
      <h2 className="text-3xl font-bold">Projects</h2>
      <p className="text-gray-600 mt-2">Add 3–6 projects with 1–2 line descriptions.</p>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {projects.map((p) => <ProjectCard key={p.title} p={p} />)}
      </div>
    </section>
  )
}
