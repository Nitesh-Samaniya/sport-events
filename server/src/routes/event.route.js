const express = require("express");
const EventModel = require("../model/event.model");

const app = express.Router();

app.get("/", async (req,res)=> {
    const events = await EventModel.find();
    return res.send(events)
})

app.post("/", async(req,res)=> {
    let {desc, date, playersLimit, type, org_id, org_name} = req.body;
    let players = [];

    try{
        let event = new EventModel({desc, date, playersLimit, type, org_id, org_name, players});
        await event.save();
        return res.status(201).send(event);
    }catch(e){
        return res.status(500).send(e.message);
    }

})

// PUT route to update an event by adding a player
app.put('/:id', async (req, res) => {
    const eventId = req.params.id;
    const player = req.body.player;
  
    try {
      const event = await EventModel.findById(eventId);
      if (!event) {
        return res.status(404).json({ message: 'Event not found' });
      }
  
      if (event.players.length >= event.playersLimit) {
        return res.status(400).json({ message: 'Maximum player limit reached' });
      }
  
      event.players.push(player);
      await event.save();
      return res.status(201).send(event);
    //   res.json(event);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
});

module.exports = app;