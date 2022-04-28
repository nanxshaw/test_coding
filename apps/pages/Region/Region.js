import React, { Component } from 'react';
import { View, Text, SafeAreaView, FlatList, TouchableOpacity, Alert } from 'react-native';
import styles from './RegionStyles';

class Region extends Component {
  constructor(props) {
    super(props);
    this.state = {
      province: [
        {
          id_province: 1,
          name: 'Banten',
          status: false
        },
        {
          id_province: 2,
          name: 'Jawa Timur',
          status: false
        },
      ],
      city: [
        //banten
        {
          id_city: 1,
          name: 'Tangerang',
          id_province: 1,
          status: false
        },
        {
          id_city: 2,
          name: 'Tangerang Selatan',
          id_province: 1,
          status: false
        },
        //jawa timur
        {
          id_city: 3,
          name: 'Malang',
          id_province: 2,
          status: false
        },
        {
          id_city: 4,
          name: 'Kediri',
          id_province: 2,
          status: false
        },
      ],
      district: [
        {
          id_district: 1,
          name: 'Cipondoh',
          id_city: 1,
          id_province: 1,
          status: false
        },
        {
          id_district: 2,
          name: 'Poris',
          id_city: 1,
          id_province: 1,
          status: false
        },
        {
          id_district: 3,
          name: 'Ciputat',
          id_city: 2,
          id_province: 1,
          status: false
        },
        {
          id_district: 4,
          name: 'Jombang',
          id_city: 2,
          id_province: 1,
          status: false
        },
        {
          id_district: 5,
          name: 'Klojen',
          id_city: 3,
          id_province: 2,
          status: false
        },
        {
          id_district: 6,
          name: 'Blimbling',
          id_city: 3,
          id_province: 2,
          status: false
        },
        {
          id_district: 7,
          name: 'Badas',
          id_city: 4,
          id_province: 2,
          status: false
        },
        {
          id_district: 8,
          name: 'Banyakan',
          id_city: 4,
          id_province: 2,
          status: false
        },
      ],
      villages: [
        {
          id_villages: 1,
          name: 'Desa Cipondoh',
          post: '15112',
          id_district: 1,
          id_city: 1,
          id_province: 1,
          status: false
        },
        {
          id_villages: 2,
          name: 'Desa Poris',
          post: '15119',
          id_district: 2,
          id_city: 1,
          id_province: 1,
          status: false
        },
        {
          id_villages: 3,
          name: 'Desa Ciputat',
          post: '15221',
          id_district: 3,
          id_city: 2,
          id_province: 1,
          status: false
        },
        {
          id_villages: 4,
          name: 'Desa Jombang',
          post: '15225',
          id_district: 4,
          id_city: 2,
          id_province: 1,
          status: false
        },
        {
          id_villages: 5,
          name: 'Desa Klojen',
          post: '65119 ',
          id_district: 5,
          id_city: 3,
          id_province: 2,
          status: false
        },
        {
          id_villages: 6,
          name: 'Desa Blimbling',
          post: '61463',
          id_district: 6,
          id_city: 3,
          id_province: 2,
          status: false
        },
        {
          id_villages: 7,
          name: 'Desa Badas',
          post: '64221',
          id_district: 7,
          id_city: 4,
          id_province: 2,
          status: false
        },
        {
          id_villages: 8,
          name: 'Desa Banyakan',
          post: '64157',
          id_district: 8,
          id_city: 4,
          id_province: 2,
          status: false
        },
      ],

      value_region: null,
      hsl_get_data: null
    };
  }

  onSelect = (id, type) => {
    const { province, city, district, villages } = this.state;
    switch (type) {
      case 'province':
        let prov = province;
        let i = prov.findIndex(x => x.id_province === id);
        prov[i].status = !prov[i].status;
        this.setState({
          province: prov
        })
        break;
      case 'city':
        let c = city;
        let i2 = c.findIndex(x => x.id_city === id);
        c[i2].status = !c[i2].status;
        this.setState({
          city: c
        })
        break;
      case 'district':
        let d = district;
        let i3 = d.findIndex(x => x.id_district === id);
        d[i3].status = !d[i3].status;
        this.setState({
          district: d
        })
        break;
      case 'villages':
        let v = villages;
        let i4 = v.findIndex(x => x.id_villages === id);
        v[i4].status = !v[i4].status;
        this.setState({
          villages: v,
          value_region: v[i4]
        })
        break;
    }
  }

  Prov = (item) => {
    return (
      <TouchableOpacity onPress={() => this.onSelect(item.id_province, 'province')} activeOpacity={.9}>
        <View style={styles.dropdown_header}>
          <Text style={styles.tx_dropdown}>{item.name}</Text>
        </View>
        {item.status == true ? this.City(item) : null}
      </TouchableOpacity>
    )
  }

  City = (key) => {
    const { city } = this.state;
    let c = city.filter(o => o.id_province === key.id_province);
    return c.map((item, i) => (
      <TouchableOpacity key={i} onPress={() => this.onSelect(item.id_city, 'city')} activeOpacity={.9}>
        <View style={styles.dropdown}>
          <Text style={[styles.tx_dropdown, { paddingLeft: 10 }]}>{item.name}</Text>
        </View>
        {item.status == true ? this.District(item) : null}
      </TouchableOpacity>
    ));
  }

  District = (key) => {
    const { district } = this.state;
    let dis = district.filter(o => o.id_city === key.id_city);
    return dis.map((item, i) => (
      <TouchableOpacity key={i} onPress={() => this.onSelect(item.id_district, 'district')} activeOpacity={.9}>
        <View style={styles.dropdown}>
          <Text style={[styles.tx_dropdown, { paddingLeft: 20 }]}>{item.name}</Text>
        </View>
        {item.status == true ? this.Villages(item) : null}
      </TouchableOpacity>
    ));
  }

  Villages = (key) => {
    const { villages } = this.state;
    let v = villages.filter(o => o.id_district === key.id_district);
    return v.map((item, i) => (
      <TouchableOpacity key={i} onPress={() => this.onSelect(item.id_villages, 'villages')} activeOpacity={.9}>
        <View style={styles.dropdown}>
          <Text style={[styles.tx_dropdown, { paddingLeft: 30 }]}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    ));
  }

  getData = () => {
    const { province, city, district, villages, value_region } = this.state;
    if (value_region != null) {
      //mengembalikan status ke false
      for (let i = 0; i < province.length; i++) {
        province[i].status = false;
      }
      for (let i = 0; i < city.length; i++) {
        city[i].status = false;
      }
      for (let i = 0; i < district.length; i++) {
        district[i].status = false;
      }
      for (let i = 0; i < villages.length; i++) {
        villages[i].status = false;
      }

      //search id
      let p = province.find(o => o.id_province === value_region.id_province);
      let c = city.find(o => o.id_city === value_region.id_city);
      let d = district.find(o => o.id_district === value_region.id_district);
      let data = {
        province: p,
        city: c,
        district: d,
        villages: value_region
      }
      this.setState({
        hsl_get_data: data,
        value_region: null,
        province,
        city,
        district,
        villages
      })
    } else {
      Alert.alert('Notice', 'Pilih Region terlebih dahulu')
    }
  }

  render() {
    const { province, value_region, hsl_get_data } = this.state;
    let row = hsl_get_data;
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title_in}>Kode Post</Text>
        <View style={styles.row}>
          <View style={styles.col7}>
            <View style={styles.in}>
              <Text style={{ color: value_region != null ? '#444' : '#CCC' }}>{value_region != null ? value_region.post : 'Kode Post'}</Text>
            </View>
          </View>
          <View style={styles.col3}>
            <TouchableOpacity style={styles.btn} activeOpacity={.7} onPress={() => this.getData()}>
              <Text style={styles.tx_btn}>Get Data</Text>
            </TouchableOpacity>
          </View>
        </View>
        {
          row != null ?
            <View style={styles.form}>
              <View style={styles.col5}>
                <Text style={styles.tx_hsl}>Province</Text>
                <Text style={styles.tx_hsl}>City</Text>
                <Text style={styles.tx_hsl}>District</Text>
                <Text style={styles.tx_hsl}>Villages</Text>
                <Text style={styles.tx_hsl}>Post</Text>
              </View>
              <View style={styles.col5}>
                <Text style={styles.tx_hsl}>: {row.province.name}</Text>
                <Text style={styles.tx_hsl}>: {row.city.name}</Text>
                <Text style={styles.tx_hsl}>: {row.district.name}</Text>
                <Text style={styles.tx_hsl}>: {row.villages.name}</Text>
                <Text style={styles.tx_hsl}>: {row.villages.post}</Text>
              </View>
            </View>
            :
            null
        }
        <FlatList
          data={province}
          keyExtractor={item => item.id_province}
          renderItem={({ item }) => this.Prov(item)}
        />
      </SafeAreaView>
    );
  }
}

export default Region;
