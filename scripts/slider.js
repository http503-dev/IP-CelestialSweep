const sketchfabModels = {
  'model1ID': 'b710b4c1bef54ffabdecdb7232549af7',
  'model2ID': 'e0e009964ed3437ca76dfca545bc74ab',
  'model3ID': 'e2c680b2cf4e42e2b012d48b31d36736',
  'model4ID': '1d1d9f76d8034c33a9e9fd978c7e3f15',
  'model5ID': '77b70de99e6f49419d2d05f71935ef79',
  'model6ID': 'ca7c03060a0d4c838b3fba630929913e',
};

let currentModelIndex = 0;

function showSketchfab(modelId) {
  const iframe = document.createElement('iframe');
  iframe.src = `https://sketchfab.com/models/${modelId}/embed`;
  iframe.width = '640';
  iframe.height = '480';
  iframe.frameBorder = '0';
  iframe.allow = 'autoplay; fullscreen; vr';
  
  const sketchfabContainer = document.getElementById('sketchfab-embed');
  sketchfabContainer.innerHTML = ''; // Clear previous content
  sketchfabContainer.appendChild(iframe);
}

function showNext() {
  currentModelIndex = (currentModelIndex + 1) % Object.keys(sketchfabModels).length;
  showSketchfab(sketchfabModels[`model${currentModelIndex + 1}ID`]);
}

function showPrevious() {
  currentModelIndex = (currentModelIndex - 1 + Object.keys(sketchfabModels).length) % Object.keys(sketchfabModels).length;
  showSketchfab(sketchfabModels[`model${currentModelIndex + 1}ID`]);
}

// Initial load
showSketchfab(sketchfabModels[`model${currentModelIndex + 1}ID`]);
