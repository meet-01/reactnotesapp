export default function Sidebar({
  notes,
  onAddNote,
  onDeleteNote,
  setActiveNote,
  activeNote,
}) {
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Notes</h1>
        <button onClick={onAddNote}>Add</button>
      </div>
      <div className="app-sidebar-notes">
        {notes.map((notes) => (
          <div
            className={`app-sidebar-note ${
              notes.id === activeNote && "active"
            }`}
            onClick={() => setActiveNote(notes.id)}
          >
            <div className="sidebar-note-title">
              <strong>{notes.title}</strong>
              <button onClick={() => onDeleteNote(notes.id)}>Delete</button>
            </div>
            <p>{notes.body && notes.body.substr(0, 100) + "..."}</p>
            <small className="note-meta">
              Last modified{" "}
              {new Date(notes.lastModified).toLocaleDateString("en-IN", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}
