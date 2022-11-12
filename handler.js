const triggerConfig = triggerGui.getElementsByClassName("triggerConfig")[0];

getTriggerConfiguration(() => {
  let config = triggerConfig.component.getTriggerConfiguration();

  return {
    text: "not " + config.text,
    data: config,
  };
});
