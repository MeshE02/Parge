export function convertSnaps<T>(snaps) {
  return <T[]> snaps.map(snap => {
    return {
      documentId: snap.payload.doc.id,
      ...snap.payload.doc.data() as Object
    };
  }
  );
}

export function convertSnap<T>(snap) {
    return {
      documentId: snap.payload.id,
      ...snap.payload.data()
    };
}
