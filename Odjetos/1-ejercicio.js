function createChannel(name, subs) {
  return {
    name: name,
    subscribers: subs,
    hash: name.length * subs,
    getStatus: function () {
      return `El canal de ${name} tiene ${subs} suscriptores.`;
    },
  };
}

const canal = createChannel("Benja", 100);
console.log(canal.getStatus());
