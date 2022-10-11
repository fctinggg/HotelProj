import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { MobileDateRangePicker } from "@mui/x-date-pickers-pro/MobileDateRangePicker";
import { useCallback, useContext, useEffect, useState } from "react";
import DatePickContext from "../../store/datePickContext";

const DatePicker = () => {
  const [value, setValue] = useState([]);
  const selectedCtx = useContext(DatePickContext);

  const startDate = value[0];
  const endDate = value[1];

  useEffect(() => {
    const getDatesInRange = (startDate, endDate) => {
      const date = new Date(startDate.getTime());

      const dates = [];

      while (date <= endDate) {
        dates.push(new Date(date));
        date.setDate(date.getDate() + 1);
      }

      return dates;
    };

    const d1 = new Date(startDate);
    const d2 = new Date(endDate);

    const dateRange = getDatesInRange(d1, d2);
    selectedCtx.onDatePick(dateRange);
  }, [startDate, endDate]);

  // console.log(dateRange[0]);
  // console.log(new Date("Mon Oct 03 2022 00:00:00"));

  return (
    <Stack spacing={3}>
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        localeText={{ start: "Check In", end: "Check Out" }}
      >
        <MobileDateRangePicker
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(startProps, endProps) => (
            <>
              <TextField {...startProps} />
              <Box sx={{ mx: 2 }}> to </Box>
              <TextField {...endProps} />
            </>
          )}
        />
      </LocalizationProvider>
    </Stack>
  );
};

export default DatePicker;
