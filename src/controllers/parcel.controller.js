import Parcel from '../models/parcel'

export const createParcel = async (req, res) => {

    const { customerName, orderReference, destination, comment } = req.body;

    const newParcel = new Parcel({
        customerName,
        orderReference,
        destination,
        comment,
    });

    await newParcel.save()
        .then((parcel) => {
            return res.status(201).json(parcel);
        })
        .catch((err) => {
            return res.status('500').json({
                error: 'Parcel not created'
            });
        })

};

export const getParcels = async (req, res) => {
    await Parcel.find()
        .exec((err, parcel) => {
            if (err || !parcel)
                return res.status('400').json({
                    error: 'Parcel not found'
                });
            return res.status(200).json(parcel);
        })
};

export const getParcelByid = async (req, res) => {
    const { parcelId } = req.params;
    await Parcel.findById(parcelId)
        .exec((err, parcel) => {
            if (err || !parcel)
                return res.status('400').json({
                    error: 'Parcel not found'
                });
            return res.status(200).json(parcel);
        })
};



export const updateParcelById = async (req, res) => {
    const updatedParcel = await Parcel.findByIdAndUpdate(
        req.params.parcelId,
        req.body,
        {
            new: true,
        }
    );
    res.status(200).json(updatedParcel);

};

export const deleteParcelById = async (req, res) => {
    const { parcelId } = req.params;

    await Parcel.findByIdAndDelete(parcelId);

    res.status(200).json("Parcel has been deleted");

};
