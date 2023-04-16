const triggerConfig = triggerGui.getElementsByClassName("triggerConfig")[0];

getTriggerConfiguration(async () => {
  let config = await triggerConfig.component.getTriggerConfiguration();

  return {
    text: "not " + config.text,
    data: config,
  };
});

(async () => {
  if (triggerPresetData) {
    await uiBuilder.ready(triggerConfig);
    await triggerConfig.component.prepareCall;
    triggerConfig.component.loadConfig(triggerPresetData);
  }
})();
