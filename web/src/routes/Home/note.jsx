import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

function UpdateNote() {
    const { id } = useParams();
    const navigate = useNavigate();

    const baseUrl = `${import.meta.env.VITE_SERVER_URL}/notes/${id}`;
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(baseUrl);

                if (!response.ok) {
                    throw new Error('Failed to fetch data.')
                }

                const data = await response.json();
                setTitle(data.title);
                setDescription(data.description);
            } catch (error) {
                console.log("Error fetching data. Please try again later.");
            }
        }

        fetchData();
    }, [baseUrl]);

    const updateNote = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(baseUrl, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title, description }),
            })

            if (response.ok) {
                navigate('/');
            } else { 
                console.log('Failed to submit data.')
            }
        } catch (error) {
            console.log(error);
        }
    }

    const removeNote = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(baseUrl, {
                method: 'DELETE'
            });

            if(response.ok) {
                navigate('/');
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <div className="breadcrump-nav">
                <Link to="/" className="back-button">👈 back</Link>
                <button onClick={removeNote} className="delete">
                    ❌ Remove
                </button>
            </div>

            <form onSubmit={updateNote}>
                <div className="single-note">
                    <div>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder='Title'
                            className='title'
                        />
                    </div>

                    <div>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Description"
                            rows={4}
                            cols={50}
                            className="description"
                        >

                        </textarea>
                    </div>
                </div>
                <input
                    type="submit"
                    value='💾 Save Note'
                />
            </form>
        </div>
    )
}

export default UpdateNote
