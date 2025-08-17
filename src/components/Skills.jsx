import skills from '../data/skills.json'

export default function Skills() {
  const groups = [
    { title: 'Frontend', items: skills.frontend },
    { title: 'Backend', items: skills.backend },
    { title: 'DB & Tools', items: skills.tools },
    { title: 'devops', items: skills.devops },
  ]

  return (
    <section id="skills" className="py-12">
      <h2 className="text-3xl font-bold">Skills</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {groups.map((g) => (
          <div key={g.title} className="border rounded-xl p-5 bg-white shadow-sm">
            <h3 className="font-semibold text-blue-600">{g.title}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {g.items.map((s) => (
                <li key={s} className="px-3 py-1 text-sm rounded-full bg-gray-100 border">{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
