import type { Event } from "../../types/event";

const EventFormField: React.FC<{ event?: Event }> = ({ event }) => {
	return (
		<>
			<p>
				<label htmlFor="title">Title</label>
				<input
					id="title"
					type="text"
					name="title"
					required
					defaultValue={event ? event.title : ""}
				/>
			</p>
			<p>
				<label htmlFor="image">Image</label>
				<input
					id="image"
					type="url"
					name="image"
					required
					defaultValue={event ? event.image : ""}
				/>
			</p>
			<p>
				<label htmlFor="date">Date</label>
				<input
					id="date"
					type="date"
					name="date"
					required
					defaultValue={event ? event.date : ""}
				/>
			</p>
			<p>
				<label htmlFor="description">Description</label>
				<textarea
					id="description"
					name="description"
					rows={5}
					required
					defaultValue={event ? event.description : ""}
				/>
			</p>
		</>
	);
};

export default EventFormField;
