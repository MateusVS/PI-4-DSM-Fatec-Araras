require "serialport"

port_str = "COM3"
baud_rate = 9600
data_bits = 8
stop_bits = 2
parity = SerialPort::NONE

sp = SerialPort.new(port_str, baud_rate, data_bits, stop_bits, parity)

loop do
  puts sp.gets
  File.open('temperature.txt', 'w') do |out|
    out.puts sp.gets
  end
  puts sp.gets
end

sp.close