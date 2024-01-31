import Model from "../models/AppModel.js";

export const getNotes = async (req, res) => {
  try {
    const userId = req.headers["auth"];

    const notes = await Model.find({ userId });
    return res.status(200).json({ data: notes });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getNotesById = async (req, res) => {
  try {
    const id = req.params.id;
    const notes = await Model.findById(id);
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addNotes = async (req, res) => {
  try {
    const userId = req.headers["auth"];

    const notes = await Model.create({
      userId,
      ...req.body,
    });

    return res.status(200).json(notes);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};

export const deleteNotesById = async (req, res) => {
  try {
    const id = req.params.id;
    const note = await Model.findById(id);
    const promise = await Model.findByIdAndDelete(id);

    if (!note) {
      return res
        .status(404)
        .json({ message: `cannot find any prodct with ID ${id}` });
    }

    return res.status(200).json("deleted Successfully");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateNotesById = async (req, res) => {
  try {
    const id = req.params.id;
    const note = await Model.findByIdAndUpdate(id, req.body);

    // in case no note find by the given id

    if (!note) {
      return res
        .status(404)
        .json({ message: `cannot find any prodct with ID ${id}` });
    }

    const updatedNote = await findById(id);
    return res.status(200).json(updatedNote);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
