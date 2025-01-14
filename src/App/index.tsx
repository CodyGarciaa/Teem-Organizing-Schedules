import './styles.css'

function App() {

  return (
    <div className='back'>
        <h1>Teemo Scheduler</h1>
        <div className='task_div'>
            <h2>New Task</h2>
            <label>
                Task Name: <input name="task" />
            </label>
            <label>
                Deadline: <input name="deadline" />
            </label>
            <label>
                Time Required: <input name="time_req" />
            </label>
            <button>Add Task</button>
        </div>
        <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&showPrint=0&src=Y3pnYXJjaWFAYmVya2VsZXkuZWR1&src=Y18yNDlkOWIxMmNkMjZmOWZmODk2ZWI3NTg4YmEyYmE0N2UwMzM3YTY5ZWQyZWY4NzAyZjI0Y2M0NjRmZmZhYmVlQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y19kMWQ3YWE0M2YxZmQ2Mjk5MTcyODdjMTQ1OGQ1MjM4MGI4MDY1OTNiOGVmNzNmZWIzODk4Y2JlMDFhMGRlNGI1QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y185ZjY1YWRlMDE4OWU3N2JhZmZiYWUwNmQ5YTk5YmJhNmMyZjk0NTY5ZDIxYmM1MThjNjRhZjVkZTgyNmYyZjM2QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=MnRvdTVxcnExbGVzbHByNGFiMmVyOTIxbjBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=Y18zMDcwYjcyZjVkNTE4N2IzMWFmYmE0ZWQwNjkyMTdlMjJhZjU3ZTFjNDM1ZDA5YmZhODQ1OTE3NTg5MTJhNjdlQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=ZjBxNGU4NDlqazY3Yjc1MTZ1ZzFndTM2NW9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=YnJpYW5uYWlzd29ub0BiZXJrZWxleS5lZHU&src=eW91dGgubWVudG9yc2hpcEBnbWFpbC5jb20&color=%23039BE5&color=%234ab0cc&color=%2317ae2d&color=%23cc990d&color=%2333B679&color=%234ab0cc&color=%234ab0cc&color=%23cc990d&color=%23cc4fca&color=%23B39DDB" width="800" height="600" scrolling="no" className='calendar'></iframe>
    </div>
  )
}

export default App