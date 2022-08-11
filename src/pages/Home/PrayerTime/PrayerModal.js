import React from 'react';

const PrayerModal = () => {
    const handleTime = () => {
        console.log('clicked')
    }
    return (
        <div>
            <input type="checkbox" id="prayerModal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="prayerModal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold">Congratulations random Internet user!</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <button className='btn btn-sm' onClick={() => handleTime}>Post</button>
                </div>
            </div>
        </div>
    );
};

export default PrayerModal;