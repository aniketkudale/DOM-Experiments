set count=
for /d %%a in (*) do set /a count+=1
count=count+1;
echo %count%
md Experiment-%count%
xcopy /s Boiler Experiment-%count%