const triggerConfig = triggerGui.getElementsByClassName("triggerConfig")[0];

getTriggerConfiguration(async () => {
  let config = await triggerConfig.component.getTriggerConfiguration();

  return {
    text: "not " + config.text,
    data: config,
  };
});
