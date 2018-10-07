#!/usr/bin/env python
# sudo apt install libffi-dev
# sudo pip install -U pip setuptools
# sudo pip install PCA9685-driver

from pca9685_driver import Device
from time import sleep
import signal
import sys

# 0x40 from i2cdetect -y 1 (1 if Raspberry pi 2)
dev = Device(0x40)


# set the pwm frequency (Hz)
dev.set_pwm_frequency(50)
dev.set_pwm(0,0)

def turnoff(signal, frame):
  print("turnoff")
  dev.set_pwm(0,0)
  sys.exit(0)

signal.signal(signal.SIGINT, turnoff);

dev.set_pwm(0, int(sys.argv[1]))
sleep(0.2)
dev.set_pwm(0,0)
