const DynamicComponent = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a 2-second delay
  return <p>Dynamic Component Loaded...</p>;
}

export default DynamicComponent;