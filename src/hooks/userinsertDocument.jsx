import { useState, useEffect, useReducer } from "react";
import { db } from "../firebase/config";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const initialState = {
  loading: null,
  error: null,
};

const insertReducer = (state, action) => {};

export const useInsertDocument = (docCollection) => {
  const [response, dispatch] = useState(false);

  const checkCancelBeforeDispatch = (action) => {
    if (!cancelled) {
      dispatch(action);
    }
  };

  const insertDocumenmt = async (action) => {
    try {
      const newDocument = { ...document, createdAt: Timestamp.now() };

      const insertDocument = await addDoc(
        collection(db, docCollection),
        newDocument
      );
    } catch (error) {}
  };
};
