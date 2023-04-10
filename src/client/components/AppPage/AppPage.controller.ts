function useController() {
  const handleDragEnd = (result: any) => {
    console.log(result);
  };
  const data = ["MAMA", "PAPA", "BRO"];

  return { handleDragEnd, data };
}

export default useController;
