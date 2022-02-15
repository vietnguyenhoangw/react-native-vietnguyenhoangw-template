// Utils
import {first, flatten, map, replace, size} from '@/utils';

const STYLES = {
  'bW-{number}': (numb: number) => {
    return {
      borderWidth: -numb,
    };
  },
  'bBLR-{number}': (numb: number) => {
    return {
      borderBottomLeftRadius: -numb,
    };
  },
  'bBRR-{number}': (numb: number) => {
    return {
      borderBottomRightRadius: -numb,
    };
  },
  'bTLR-{number}': (numb: number) => {
    return {
      borderTopLeftRadius: -numb,
    };
  },
  'bTRR-{number}': (numb: number) => {
    return {
      borderTopRightRadius: -numb,
    };
  },
  't-{number}': (numb: number) => {
    return {
      top: -numb,
    };
  },
  'b-{number}': (numb: number) => {
    return {
      bottom: -numb,
    };
  },
  'l-{number}': (numb: number) => {
    return {
      left: -numb,
    };
  },
  'r-{number}': (numb: number) => {
    return {
      right: -numb,
    };
  },
  // Padding
  'p-{number}': (numb: number) => {
    return {
      padding: -numb,
    };
  },
  'pT-{number}': (numb: number) => {
    return {
      paddingTop: -numb,
    };
  },
  'pL-{number}': (numb: number) => {
    return {
      paddingLeft: -numb,
    };
  },
  'pR-{number}': (numb: number) => {
    return {
      paddingRight: -numb,
    };
  },
  'pB-{number}': (numb: number) => {
    return {
      paddingBottom: -numb,
    };
  },
  'pH-{number}': (numb: number) => {
    return {
      paddingHorizontal: -numb,
    };
  },
  'pV-{number}': (numb: number) => {
    return {
      paddingVertical: -numb,
    };
  },
  'bR-{number}': (numb: number) => {
    return {
      borderRadius: -numb,
    };
  },
  // Margin
  'm-{number}': (numb: number) => {
    return {
      margin: -numb,
    };
  },
  'mT-{number}': (numb: number) => {
    return {
      marginTop: -numb,
    };
  },
  'mL-{number}': (numb: number) => {
    return {
      marginLeft: -numb,
    };
  },
  'mR-{number}': (numb: number) => {
    return {
      marginRight: -numb,
    };
  },
  'mB-{number}': (numb: number) => {
    return {
      marginBottom: -numb,
    };
  },
  'mH-{number}': (numb: number) => {
    return {
      marginHorizontal: -numb,
    };
  },
  'mV-{number}': (numb: number) => {
    return {
      marginVertical: -numb,
    };
  },
  'bW{number}': (numb: number) => {
    return {
      borderWidth: numb,
    };
  },
  'bBLR{number}': (numb: number) => {
    return {
      borderBottomLeftRadius: numb,
    };
  },
  'bBRR{number}': (numb: number) => {
    return {
      borderBottomRightRadius: numb,
    };
  },
  'bTLR{number}': (numb: number) => {
    return {
      borderTopLeftRadius: numb,
    };
  },
  'bTRR{number}': (numb: number) => {
    return {
      borderTopRightRadius: numb,
    };
  },
  't{number}': (numb: number) => {
    return {
      top: numb,
    };
  },
  'b{number}': (numb: number) => {
    return {
      bottom: numb,
    };
  },
  'l{number}': (numb: number) => {
    return {
      left: numb,
    };
  },
  'r{number}': (numb: number) => {
    return {
      right: numb,
    };
  },
  // Padding
  'p{number}': (numb: number) => {
    return {
      padding: numb,
    };
  },
  'pT{number}': (numb: number) => {
    return {
      paddingTop: numb,
    };
  },
  'pL{number}': (numb: number) => {
    return {
      paddingLeft: numb,
    };
  },
  'pR{number}': (numb: number) => {
    return {
      paddingRight: numb,
    };
  },
  'pB{number}': (numb: number) => {
    return {
      paddingBottom: numb,
    };
  },
  'pH{number}': (numb: number) => {
    return {
      paddingHorizontal: numb,
    };
  },
  'pV{number}': (numb: number) => {
    return {
      paddingVertical: numb,
    };
  },
  'bR{number}': (numb: number) => {
    return {
      borderRadius: numb,
    };
  },
  // Margin
  'm{number}': (numb: number) => {
    return {
      margin: numb,
    };
  },
  'mT{number}': (numb: number) => {
    return {
      marginTop: numb,
    };
  },
  'mL{number}': (numb: number) => {
    return {
      marginLeft: numb,
    };
  },
  'mR{number}': (numb: number) => {
    return {
      marginRight: numb,
    };
  },
  'mB{number}': (numb: number) => {
    return {
      marginBottom: numb,
    };
  },
  'mH{number}': (numb: number) => {
    return {
      marginHorizontal: numb,
    };
  },
  'mV{number}': (numb: number) => {
    return {
      marginVertical: numb,
    };
  },
  sb: () => {
    return {
      justifyContent: 'space-between',
    };
  },
  'size{number}': (numb: number) => {
    return {
      fontSize: numb,
    };
  },
};

export function generateFastStyles(props: any): any {
  var style: any = [];

  // 1. map for STYLES
  map(STYLES, (item, key) => {
    // create regex condition.
    const regex = new RegExp(replace(key, '{number}', '[0-9]+'));

    // 1. map for props.
    map(props, (value, key) => {
      // check regex condition with key.
      if (regex.test(key)) {
        const numberRegex = new RegExp('[0-9]+');
        const matches = numberRegex.exec(key);
        var number = 0;

        // matches value always return values
        // check if this one have value or not
        if (size(matches) > 0) {
          // value number in first of matches array.
          number = parseInt(first(matches) || '');
        }

        style.push(item(number));
      }
    });
  });

  // merge multiple array to only one.
  return flatten(style);
}
