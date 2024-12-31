const formatDateTime = (format, locale, detailEvent) => {
  const startTimeEvent = detailEvent.dates?.start.localTime
    ? format(
        new Date(`2024-01-01T${detailEvent.dates?.start?.localTime}`),
        "h:mm a", // Formato de 12 horas con AM/PM
        { locale }
      )
    : "No disponible";

  const startDateEvent = detailEvent.dates?.start.localDate
    ? format(new Date(detailEvent.dates?.start?.localDate), "dd MMMM yyyy", {
        locale,
      })
    : "No disponible";
  return { startTimeEvent, startDateEvent };
};

export default formatDateTime;
