'use client';

import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { Draggable, DropArg } from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";

// interface Event {
//   title: String;
//   start: Date | String;
//   allDay: Boolean;
//   id: number;
// }

// const event = {
//   title: `Sample Event`,
//   start: new Date(),
//   allDay: true,
//   id: 1,
// }

const Calendar = () => {
  const [events, setEvents] = useState([
    { title: `event 1`, id: `1` },
    { title: `event 2`, id: `2` },
    { title: `event 3`, id: `3` },
    { title: `event 4`, id: `4` },
    { title: `event 5`, id: `5` },
  ])
  const [allEvents, setAllEvents] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [idToDelete, setIdToDelete] = useState(null)
  const [newEvent, setNewEvent] = useState({
    title: '',
    start: '',
    allDay: false,
    id: 0,
  })

  useEffect(() => {
    let draggableEl = document.getElementById('draggable-el')
    if (draggableEl) {
      new Draggable(draggableEl, {
        itemSelector: ".fc-event",
        eventData: function(eventEl) {
          let title = eventEl.getAttribute("title")
          let id = eventEl.getAttribute("data")
          let start = eventEl.getAttribute("start")
          return { title, id, start }
        }
      })
    }
  }, [])

  const handleDateClick = (arg) => {
    setNewEvent({
      ...newEvent,
      start: arg.date,
      allDay: arg.allDay,
      id: new Date().getTime(),
    });
    setShowModal(true);
  }

  const addEvent = (data) => {
    const event = {
      ...newEvent,
      start: data.date.toISOString(), 
      title: data.draggedEl.innerText, 
      allDay: data.allDay,
      id: new Date().getTime(),
    }
    setAllEvents([...allEvents, event])
  }

  const handleDeleteModal = (data) => {
    setShowDeleteModal(true)
    setIdToDelete(Number(data.event.id))
  }

  return (
    <>
      <nav className="flex justify-between mb-12 border-b border-violet-100 p-4">
        <h1 className="font-bold text-2xl text-gray-700">Calendar</h1>
      </nav>
      <main className="flex mon-h-screen flex-col items-center justify-between p-24">
        <div className="grid grid-cols-10">
          <div className="col-span-8">
            <FullCalendar
              plugins={[
                dayGridPlugin,
                interactionPlugin,
                timeGridPlugin
              ]}
              headerToolbar={{
                left: `prev, next today`,
                center: `title`,
                right: `resourceTimelineWook, dayGridMonth, timeGridWeek`
              }}
              events={allEvents}
              nowIndicator={true}
              editable={true}
              droppable={true}
              selectable={true}
              selectMirror={true}
              dateClick={handleDateClick}
              drop={(data) => addEvent(data)}
              eventClick= {(data) => handleDeleteModal(data)}
            />
          </div>
          <div id="draggable-el" className="ml-8 w-full border-2 p-2 rounded-md mt-16 lg:h-1/2 bg-violet-100">
            <h1 className="font-bold text-lg text-center">Drag Event</h1>
            {events.map((event) => {
              return (
                <div
                  className="fc-event border-2 p-1 m-2 w-full rounded-md ml-auto text-center bg-white"
                  title={event.title}
                  key={event.id}
                >
                  {event.title}
              </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default Calendar;