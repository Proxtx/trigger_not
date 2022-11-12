const triggerConfig = triggerGui.getElementsByClassName("triggerConfig")[0];

getTriggerConfiguration(() => {
  return triggerConfig.component.getTriggerConfiguration();
});
