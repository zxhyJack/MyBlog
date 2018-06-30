#node
sudo apt update
sudo apt-get install curl
sudo curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash - 
sudo apt-get install -y nodejs
sudo apt-get install nodejs

#redis
sudo apt-get update
sudo apt-get install redis-server

#mysql
mkdir ~/download
cd ~/download
wget https://dev.mysql.com/get/mysql-apt-config_0.8.10-1_all.deb
sudo dpkg -i mysql-apt-config_0.8.10-1_all.deb #设置mysql版本
sudo apt-get update
sudo apt-get install mysql-server

#mongodb
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2930ADAE8CAF5059EE73BB4B58712A2291FA4AD5
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.6 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.6.list
sudo apt-get update
sudo apt-get install -y mongodb-org
sudo service mongod start
#google输入法
sudo apt-get install fcitx fcitx-googlepinyin im-config  
im-config 

#git
sudo add-apt-repository ppa:git-core/ppa 
sudo apt update
sudo apt install git

# chrome
#wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
#sudo dpkg -i --force-depends google-chrome-stable_current_amd64.deb

# ss-qt5
sudo add-apt-repository ppa:hzwhuang/ss-qt5
sudo apt-get update
sudo apt-get install shadowsocks-qt5

# terminator
sudo apt-get install terminator



